import React from 'react';

const DsaSidebar = ({ topics, onSelectTopic, selectedTopic }) => {
  return (
    <div className="w-full lg:w-80 bg-gray-50 border-r border-gray-200 p-4 lg:p-6 h-full overflow-y-auto">
      {/* Mobile Close Button */}
      <div className="lg:hidden flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">DSA Topics</h2>
        <button
          onClick={() => onSelectTopic(selectedTopic)} // This will trigger the close in parent
          className="p-2 rounded-md bg-black text-white hover:bg-gray-800 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Desktop Title */}
      <h2 className="hidden lg:block text-xl font-semibold mb-6 text-gray-800">DSA Topics</h2>

      <nav className="space-y-2">
        {topics.map((topic, index) => (
          <div key={topic.id} className="relative">
            <button
              onClick={() => onSelectTopic(topic.id)}
              className={`
                w-full text-left p-3 lg:p-4 rounded-lg transition-all duration-200
                ${selectedTopic === topic.id 
                  ? 'bg-black text-white shadow-md' 
                  : 'text-black hover:bg-gray-200 hover:text-black border border-gray-300'
                }
                focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2
                text-sm lg:text-base font-medium
              `}
            >
              <div className="flex items-center">
                <span className={`flex-shrink-0 w-6 h-6 lg:w-8 lg:h-8 rounded-full flex items-center justify-center text-xs lg:text-sm font-bold mr-3 ${
                  selectedTopic === topic.id 
                    ? 'bg-white text-black' 
                    : 'bg-gray-200 text-black'
                }`}>
                  {index + 1}
                </span>
                <span className="leading-tight">{topic.name}</span>
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