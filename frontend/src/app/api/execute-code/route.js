import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { writeFile, unlink, readFile } from 'fs/promises';
import { join } from 'path';
import { tmpdir } from 'os';

export async function POST(request) {
  try {
    const { code, language = 'cpp' } = await request.json();

    if (!code) {
      return NextResponse.json({ error: 'No code provided' }, { status: 400 });
    }

    if (!['cpp', 'python'].includes(language)) {
      return NextResponse.json({ error: 'Only C++ and Python are supported' }, { status: 400 });
    }

    // Check if we're in a serverless environment that doesn't support code execution
    const isServerless = process.env.VERCEL || process.env.NETLIFY || process.env.AWS_LAMBDA_FUNCTION_NAME;
    
    if (isServerless) {
      return NextResponse.json({ 
        error: 'Code execution is not available in this deployment environment. This feature requires a server with compiler support.',
        details: 'Serverless environments (Vercel, Netlify, etc.) do not support system-level code execution for security reasons.',
        suggestion: 'For C++ execution, consider using a dedicated server or cloud IDE service.'
      }, { status: 503 });
    }

    // Create a temporary file
    const tempDir = tmpdir();
    const timestamp = Date.now();
    const fileName = `code_${timestamp}.${language === 'cpp' ? 'cpp' : 'py'}`;
    const filePath = join(tempDir, fileName);
    const outputPath = join(tempDir, `output_${timestamp}.txt`);

    // Write code to temporary file
    await writeFile(filePath, code);

    let command;
    if (language === 'cpp') {
      command = `g++ -o ${join(tempDir, `exec_${timestamp}`)} ${filePath} && ${join(tempDir, `exec_${timestamp}`)} > ${outputPath} 2>&1`;
    } else if (language === 'python') {
      command = `python3 ${filePath} > ${outputPath} 2>&1`;
    }

    return new Promise((resolve) => {
      exec(command, { timeout: 10000 }, async (error, stdout, stderr) => {
        try {
          let output = '';
          let errorOutput = '';

          try {
            output = await readFile(outputPath, 'utf8');
          } catch (readError) {
            // Output file might not exist if there was an error
          }

          // Clean up temporary files
          try {
            await unlink(filePath);
            await unlink(outputPath);
            if (language === 'cpp') {
              await unlink(join(tempDir, `exec_${timestamp}`));
            }
          } catch (cleanupError) {
            // Ignore cleanup errors
          }

          if (error) {
            errorOutput = error.message || 'Execution failed';
          }

          if (stderr) {
            errorOutput += stderr;
          }

          if (errorOutput) {
            resolve(NextResponse.json({ 
              error: 'Execution failed', 
              details: errorOutput 
            }, { status: 400 }));
          } else {
            resolve(NextResponse.json({ output: output.trim() }));
          }
        } catch (err) {
          resolve(NextResponse.json({ 
            error: 'Internal server error', 
            details: err.message 
          }, { status: 500 }));
        }
      });
    });

  } catch (error) {
    return NextResponse.json({ 
      error: 'Invalid request', 
      details: error.message 
    }, { status: 400 });
  }
} 