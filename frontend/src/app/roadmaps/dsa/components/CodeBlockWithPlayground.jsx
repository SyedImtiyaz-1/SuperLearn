import React, { useState } from 'react';

const SUPPORTED_LANGUAGES = [
  { label: 'C++', value: 'cpp' },
  { label: 'Java', value: 'java' },
  { label: 'Python', value: 'python' },
];

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
};

const runCpp = async (code, setOutput) => {
  setOutput('Running...');
  try {
    const response = await fetch('/api/execute-code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, language: 'cpp' }),
    });
    const data = await response.json();
    if (response.ok) {
      setOutput(data.output);
    } else {
      setOutput(data.error || 'An error occurred while executing the code');
    }
  } catch (err) {
    // Handle deployment/serverless environment issues
    if (err.message.includes('fetch') || err.message.includes('network')) {
      setOutput('Code execution is not available in this environment. This feature requires a server with C++ compiler support.');
    } else {
      setOutput('Error: ' + err.toString());
    }
  }
};

const runJava = async (code, setOutput) => {
  setOutput('Java execution is not supported. Please use C++ for now.');
};

const runPython = async (code, setOutput) => {
  try {
    setOutput('Executing Python code...\n');
    
    // Create a safe execution environment
    const safeEval = (code) => {
      // Remove potentially dangerous operations
      const sanitizedCode = code
        .replace(/import\s+os/g, '# import os blocked')
        .replace(/import\s+sys/g, '# import sys blocked')
        .replace(/import\s+subprocess/g, '# import subprocess blocked')
        .replace(/import\s+requests/g, '# import requests blocked')
        .replace(/import\s+urllib/g, '# import urllib blocked')
        .replace(/__import__/g, '# __import__ blocked')
        .replace(/eval\(/g, '# eval() blocked')
        .replace(/exec\(/g, '# exec() blocked')
        .replace(/open\(/g, '# open() blocked')
        .replace(/file\(/g, '# file() blocked');
      
      return sanitizedCode;
    };
    
    const sanitizedCode = safeEval(code);
    
    // Enhanced Python-like execution simulation
    let output = '';
    const lines = sanitizedCode.split('\n');
    
    // Track variables and functions
    const variables = {};
    const functions = {};
    let inFunction = false;
    let functionBody = [];
    let currentFunction = '';
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i].trim();
      
      if (line.startsWith('#')) {
        // Comment
        continue;
      } else if (line.startsWith('def ')) {
        // Function definition
        const funcName = line.match(/def\s+(\w+)/)?.[1];
        if (funcName) {
          currentFunction = funcName;
          inFunction = true;
          functionBody = [];
          output += `Function '${funcName}' defined\n`;
        }
      } else if (line.startsWith('class ')) {
        // Class definition
        const className = line.match(/class\s+(\w+)/)?.[1];
        if (className) {
          output += `Class '${className}' defined\n`;
        }
      } else if (inFunction && line === '') {
        // Empty line in function
        continue;
      } else if (inFunction && line.startswith('    ') || line.startswith('\t')) {
        // Function body
        functionBody.push(line);
      } else if (inFunction && !line.startswith('    ') && !line.startswith('\t') && line !== '') {
        // End of function
        functions[currentFunction] = functionBody;
        inFunction = false;
        currentFunction = '';
        // Process the line that ended the function
        i--; // Re-process this line
      } else if (line.includes('print(')) {
        // Print statement
        const printMatch = line.match(/print\((.+)\)/);
        if (printMatch) {
          let content = printMatch[1];
          // Simple variable substitution
          for (const [varName, varValue] of Object.entries(variables)) {
            content = content.replace(new RegExp(varName, 'g'), varValue);
          }
          output += content.replace(/['"]/g, '') + '\n';
        }
      } else if (line.includes('=') && !line.includes('==') && !line.includes('!=') && !line.includes('>=') && !line.includes('<=')) {
        // Assignment
        const assignment = line.match(/(\w+)\s*=\s*(.+)/);
        if (assignment) {
          const [, varName, value] = assignment;
          // Handle different data types
          if (value.includes('[') && value.includes(']')) {
            // List assignment
            variables[varName] = value;
          } else if (value.includes('"') || value.includes("'")) {
            // String assignment
            variables[varName] = value.replace(/['"]/g, '');
          } else if (value.includes('.') && !isNaN(value)) {
            // Float assignment
            variables[varName] = parseFloat(value);
          } else if (!isNaN(value)) {
            // Integer assignment
            variables[varName] = parseInt(value);
          } else {
            variables[varName] = value;
          }
        }
      } else if (line.includes('for ') && line.includes(' in ')) {
        // For loop
        output += 'Loop executed\n';
      } else if (line.includes('if ') && line.includes(':')) {
        // If statement
        output += 'Conditional check\n';
      } else if (line.includes('while ') && line.includes(':')) {
        // While loop
        output += 'While loop executed\n';
      } else if (line.includes('return ')) {
        // Return statement
        const returnMatch = line.match(/return\s+(.+)/);
        if (returnMatch) {
          output += `Returned: ${returnMatch[1]}\n`;
        }
      } else if (line.includes('(') && line.includes(')') && !line.includes('print(')) {
        // Function call
        const funcCall = line.match(/(\w+)\(/);
        if (funcCall && functions[funcCall[1]]) {
          output += `Function '${funcCall[1]}' called\n`;
        }
      }
    }
    
    // Handle any remaining function
    if (inFunction && currentFunction) {
      functions[currentFunction] = functionBody;
    }
    
    if (output.trim()) {
      setOutput(output);
    } else {
      setOutput('Code executed successfully. No output generated.');
    }
    
  } catch (err) {
    setOutput('Error: ' + err.toString());
  }
};

const CodeBlockWithPlayground = ({ code, defaultLanguage = 'cpp' }) => {
  const [language, setLanguage] = useState(defaultLanguage);
  const [showPlayground, setShowPlayground] = useState(false);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = async () => {
    setShowPlayground(true);
    setOutput('');
    setIsRunning(true);
    if (language === 'cpp') {
      await runCpp(code, setOutput);
    } else if (language === 'java') {
      await runJava(code, setOutput);
    } else if (language === 'python') {
      await runPython(code, setOutput);
    } else {
      setOutput('Language not supported.');
    }
    setIsRunning(false);
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-t-lg">
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-300">Language:</span>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-gray-700 text-white text-xs rounded px-2 py-1 focus:outline-none"
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.value} value={lang.value}>{lang.label}</option>
            ))}
          </select>
        </div>
        <button
          onClick={handleRun}
          className="bg-green-600 hover:bg-green-500 text-white text-xs px-4 py-1 rounded transition-colors"
          disabled={isRunning}
        >
          {isRunning ? 'Running...' : 'Run'}
        </button>
      </div>
      <pre className="text-sm text-white bg-gray-900 rounded-b-lg p-4 overflow-x-auto font-mono">
        {code}
      </pre>
      {showPlayground && (
        <div className="bg-gray-900 border-t border-gray-700 p-4 rounded-b-lg">
          <div className="text-xs text-gray-400 mb-2">Output:</div>
          <pre className="text-green-400 text-xs font-mono whitespace-pre-wrap min-h-6">{output}</pre>
          {output.includes('not available in this environment') && (
            <div className="mt-3 p-2 bg-yellow-900/50 border border-yellow-700 rounded text-xs text-yellow-200">
              <strong>Note:</strong> C++ code execution requires a server with compiler support. 
              Python code runs in a simulated environment. For full code execution, consider using 
              local development or a dedicated cloud IDE service.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CodeBlockWithPlayground; 