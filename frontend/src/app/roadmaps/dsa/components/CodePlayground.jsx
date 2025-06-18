import React, { useState, useRef, useEffect } from 'react';

const LANGUAGE_OPTIONS = [
  { label: 'C++', value: 'cpp' },
  { label: 'Java', value: 'java' },
];

const DEFAULT_CODE = {
  cpp: `#include <iostream>
using namespace std;

int main() {  
    int a, b, sum;
    a = 10;
    b = 15;
    sum = a + b;
    cout << "Sum of " << a << " and " << b << " is: " << sum;
    return 0;
}`,
  java: `public class Main {\n    public static void main(String[] args) {\n        int a = 10;\n        int b = 15;\n        int sum = a + b;\n        System.out.println(\"Sum of \" + a + \" and \" + b + \" is: \" + sum);\n    }\n}`
};

const CodePlayground = ({ initialCode, language = 'cpp' }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(language);
  const [code, setCode] = useState(initialCode || DEFAULT_CODE[language]);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    setCode(initialCode || DEFAULT_CODE[selectedLanguage]);
    setOutput('');
    setError('');
  }, [selectedLanguage, initialCode]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [code]);

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput('');
    setError('');

    if (selectedLanguage === 'java') {
      setError('Java execution is not yet supported on the backend.');
      setIsRunning(false);
      return;
    }

    try {
      const response = await fetch('/api/execute-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code,
          language: selectedLanguage
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setOutput(data.output);
      } else {
        setError(data.error || 'An error occurred while executing the code');
        if (data.details) {
          setOutput(data.details);
        }
      }
    } catch (error) {
      setError('Failed to connect to the server. Please try again.');
      console.error('Execution error:', error);
    } finally {
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setCode(initialCode || DEFAULT_CODE[selectedLanguage]);
    setOutput('');
    setError('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      const newCode = code.substring(0, start) + '    ' + code.substring(end);
      setCode(newCode);
      setTimeout(() => {
        e.target.selectionStart = e.target.selectionEnd = start + 4;
      }, 0);
    }
  };

  const lineCount = code.split('\n').length;

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 shadow-xl w-full max-w-full">
      {/* Header */}
      <div className="bg-gray-800 px-2 sm:px-4 py-2 sm:py-3 border-b border-gray-700">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-xs sm:text-sm font-medium ml-2">{selectedLanguage === 'java' ? 'Java' : 'C++'} Code Playground</span>
            <span className="text-gray-400 text-xs ml-2">Live Execution</span>
            <span className="ml-2 sm:ml-4 text-xs sm:text-sm text-gray-300">Language:</span>
            <select
              value={selectedLanguage}
              onChange={e => setSelectedLanguage(e.target.value)}
              className="bg-gray-700 text-white text-xs sm:text-sm rounded px-2 py-1 focus:outline-none ml-1"
            >
              {LANGUAGE_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleReset}
              className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
            >
              Reset
            </button>
            <button
              onClick={handleRunCode}
              disabled={isRunning}
              className="px-3 sm:px-4 py-1 text-xs sm:text-sm bg-green-600 text-white rounded hover:bg-green-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-1"
            >
              {isRunning ? (
                <>
                  <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Running...</span>
                </>
              ) : (
                <>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Run Code</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Code Editor */}
      <div className="relative w-full">
        {/* Line Numbers */}
        <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-12 bg-gray-800 border-r border-gray-700 text-gray-500 text-xs sm:text-sm font-mono p-2 select-none">
          {Array.from({ length: Math.max(lineCount, 10) }, (_, i) => (
            <div key={i + 1} className="h-5 leading-5 text-right pr-2">
              {i + 1}
            </div>
          ))}
        </div>
        {/* Code Textarea */}
        <div className="pl-10 sm:pl-12">
          <textarea
            ref={textareaRef}
            value={code}
            onChange={e => setCode(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full min-h-40 sm:min-h-64 bg-gray-800 text-white font-mono text-xs sm:text-sm p-2 sm:p-4 rounded-none border-0 focus:outline-none focus:ring-0 resize-none leading-5 overflow-x-auto"
            placeholder={`Enter your ${selectedLanguage === 'java' ? 'Java' : 'C++'} code here...`}
            spellCheck="false"
            style={{ lineHeight: '1.25rem' }}
          />
        </div>
      </div>

      {/* Output */}
      <div className="bg-gray-800 border-t border-gray-700 w-full overflow-x-auto">
        <div className="px-2 sm:px-4 py-2 bg-gray-700 text-white text-xs sm:text-sm font-medium flex items-center justify-between">
          <span>{error ? 'Error' : 'Output'}</span>
          <button
            onClick={() => { setOutput(''); setError(''); }}
            className="text-gray-400 hover:text-white text-xs sm:text-sm"
          >
            Clear
          </button>
        </div>
        <div className="p-2 sm:p-4">
          <pre className={`font-mono text-xs sm:text-sm whitespace-pre-wrap ${error ? 'text-red-400' : 'text-green-400'}`}>{error || output}</pre>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-gray-800 border-t border-gray-700 p-4">
        <div className="flex items-start space-x-3">
          <div className="text-blue-400 text-lg">💡</div>
          <div className="text-gray-300 text-xs">
            <p className="font-medium mb-1">Tips for using the playground:</p>
            <ul className="space-y-1 text-gray-400">
              {selectedLanguage === 'java' ? (
                <>
                  <li>• Try modifying variables and see how the output changes</li>
                  <li>• Use Tab key for indentation</li>
                  <li>• Make sure to use proper Java syntax and class structure</li>
                  <li>• Java execution is not yet supported on the backend</li>
                </>
              ) : (
                <>
                  <li>• Try modifying the values of variables 'a' and 'b' to see different results</li>
                  <li>• Use Tab key for indentation</li>
                  <li>• Make sure to include necessary headers and use proper C++ syntax</li>
                  <li>• The code will be compiled and executed on the server</li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodePlayground; 