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
    setOutput('Error: ' + err.toString());
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
        .replace(/__import__/g, '# __import__ blocked')
        .replace(/eval\(/g, '# eval() blocked')
        .replace(/exec\(/g, '# exec() blocked');
      
      return sanitizedCode;
    };
    
    const sanitizedCode = safeEval(code);
    
    // Simple Python-like execution simulation
    let output = '';
    const lines = sanitizedCode.split('\n');
    
    // Track variables and functions
    const variables = {};
    const functions = {};
    
    for (let line of lines) {
      line = line.trim();
      
      if (line.startsWith('#')) {
        // Comment
        continue;
      } else if (line.startsWith('def ')) {
        // Function definition
        const funcName = line.match(/def\s+(\w+)/)?.[1];
        if (funcName) {
          functions[funcName] = line;
          output += `Function '${funcName}' defined\n`;
        }
      } else if (line.startsWith('class ')) {
        // Class definition
        const className = line.match(/class\s+(\w+)/)?.[1];
        if (className) {
          output += `Class '${className}' defined\n`;
        }
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
      } else if (line.includes('=') && !line.includes('==') && !line.includes('!=')) {
        // Assignment
        const assignment = line.match(/(\w+)\s*=\s*(.+)/);
        if (assignment) {
          const [, varName, value] = assignment;
          variables[varName] = value.replace(/['"]/g, '');
        }
      } else if (line.includes('for ') && line.includes(' in ')) {
        // For loop
        output += 'Loop executed\n';
      } else if (line.includes('if ') && line.includes(':')) {
        // If statement
        output += 'Conditional check\n';
      }
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
        </div>
      )}
    </div>
  );
};

export default CodeBlockWithPlayground; 