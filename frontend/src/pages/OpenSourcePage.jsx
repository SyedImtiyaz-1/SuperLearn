'use client'

import React from 'react';

export default function OpenSourcePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-200 py-16 px-4">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Open Source Projects</h1>
        <p className="text-lg text-gray-600 dark:text-content-dark-muted mb-8">
          Contribute to open source and grow your skills. More features coming soon!
        </p>
        <div className="rounded-2xl bg-white dark:bg-dark-800 p-8 shadow-lg flex flex-col items-center">
          <span className="bg-yellow-100 dark:bg-dark-700 p-4 rounded-xl mb-4">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M12 2a1 1 0 0 1 1 1v2.07A7.002 7.002 0 0 1 19 12a7 7 0 0 1-7 7 7 7 0 0 1-7-7c0-3.53 2.61-6.43 6-6.93V3a1 1 0 0 1 1-1Zm0 2a5 5 0 0 0-5 5c0 2.76 2.24 5 5 5s5-2.24 5-5a5 5 0 0 0-5-5Zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/></svg>
          </span>
          <div className="font-bold text-lg text-gray-900 dark:text-white mb-1">Coming Soon</div>
          <div className="text-gray-500 dark:text-gray-300 mb-2">No open source projects listed yet. Stay tuned!</div>
          <a href="#" className="text-yellow-600 dark:text-yellow-400 font-semibold hover:underline">Notify Me</a>
        </div>
      </div>
    </div>
  );
} 