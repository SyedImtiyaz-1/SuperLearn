import React from 'react';

const DsaSidebar = ({ topics, onSelectTopic, selectedTopic }) => {
  return (
    <div className="w-full lg:w-80 bg-white/70 dark:bg-gray-950/80 backdrop-blur-xl shadow-xl border-r border-gray-200 dark:border-gray-800 p-4 lg:p-6 h-full overflow-y-auto sticky top-0 rounded-r-2xl transition-all duration-500">
      {/* Mobile Close Button */}
      <div className="lg:hidden flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">DSA Topics</h2>
        <button
          onClick={() => onSelectTopic(selectedTopic)}
          className="p-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-md"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Desktop Title */}
      <h2 className="hidden lg:block text-2xl font-extrabold mb-8 text-blue-700 dark:text-blue-300 tracking-tight">DSA Topics</h2>

      <nav className="space-y-3">
        {topics.map((topic, index) => (
          <div key={topic.id} className="relative">
            <button
              onClick={() => onSelectTopic(topic.id)}
              className={`
                w-full text-left p-3 lg:p-4 rounded-xl transition-all duration-300 font-semibold tracking-tight
                ${selectedTopic === topic.id 
                  ? 'bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 text-white shadow-lg ring-2 ring-blue-300 dark:from-blue-700 dark:via-blue-800 dark:to-blue-900 dark:ring-blue-800' 
                  : 'text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700'
                }
                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
                text-base lg:text-lg
              `}
            >
              <div className="flex items-center">
                <span className={`flex-shrink-0 w-7 h-7 lg:w-9 lg:h-9 rounded-full flex items-center justify-center text-sm lg:text-base font-bold mr-3 shadow-md ${
                  selectedTopic === topic.id 
                    ? 'bg-white text-blue-600 dark:bg-gray-900 dark:text-blue-300 border-2 border-blue-400 dark:border-blue-700' 
                    : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700'
                }`}>
                  {index + 1}
                </span>
                <span className="leading-tight font-medium">{topic.name}</span>
              </div>
            </button>
          </div>
        ))}
      </nav>

      {/* Mobile Footer */}
      <div className="lg:hidden mt-6 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">
          Tap a topic to view its content
        </p>
      </div>
    </div>
  );
};

export default DsaSidebar; 