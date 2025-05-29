'use client'

import React from 'react';

export default function RoadmapsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-200 py-16 px-4">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Tech Roadmaps</h1>
        <p className="text-lg text-gray-600 dark:text-content-dark-muted mb-8">
          Explore curated roadmaps for your tech career. More features coming soon!
        </p>
        <div className="rounded-2xl bg-white dark:bg-dark-800 p-8 shadow-lg flex flex-col items-center">
          <span className="bg-pink-100 dark:bg-dark-700 p-4 rounded-xl mb-4">
            {/* You can use an icon here, e.g., FiAward */}
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-1 4a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0V6Zm1 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/></svg>
          </span>
          <div className="font-bold text-lg text-gray-900 dark:text-white mb-1">Coming Soon</div>
          <div className="text-gray-500 dark:text-gray-300 mb-2">Guided career paths for developers</div>
          <a href="#" className="text-pink-600 dark:text-pink-400 font-semibold hover:underline">Notify Me</a>
        </div>
      </div>
    </div>
  );
} 