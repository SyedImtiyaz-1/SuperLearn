'use client'

import React from 'react';

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-200 py-16 px-4">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Tech Events</h1>
        <p className="text-lg text-gray-600 dark:text-content-dark-muted mb-8">
          Find out about upcoming tech events, webinars, and conferences. More features coming soon!
        </p>
        <div className="rounded-2xl bg-white dark:bg-dark-800 p-8 shadow-lg flex flex-col items-center">
          <span className="bg-blue-100 dark:bg-dark-700 p-4 rounded-xl mb-4">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M6 2a1 1 0 0 1 1 1v2h10V3a1 1 0 1 1 2 0v2a2 2 0 0 1-2 2H7A2 2 0 0 1 5 5V3a1 1 0 0 1 1-1Zm12 6v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8h12Zm-2 2H8v9h8v-9Z"/></svg>
          </span>
          <div className="font-bold text-lg text-gray-900 dark:text-white mb-1">Coming Soon</div>
          <div className="text-gray-500 dark:text-gray-300 mb-2">No events listed yet. Stay tuned!</div>
          <a href="#" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">Notify Me</a>
        </div>
      </div>
    </div>
  );
} 