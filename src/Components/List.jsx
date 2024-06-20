import React, { useState } from 'react';

const LatestNews = () => {
    const [expanded, setExpanded] = useState(false);

    const newsItems = [
        { title: 'Breaking News Title 1', content: 'Content of breaking news 1' },
        { title: 'Breaking News Title 2', content: 'Content of breaking news 2' },
        { title: 'Breaking News Title 3', content: 'Content of breaking news 3' },
        { title: 'Breaking News Title 3', content: 'Content of breaking news 3' },
        { title: 'Breaking News Title 3', content: 'Content of breaking news 3' },
        { title: 'Breaking News Title 3', content: 'Content of breaking news 3' },
        { title: 'Breaking News Title 3', content: 'Content of breaking news 3' },
        { title: 'Breaking News Title 3', content: 'Content of breaking news 3' },
        { title: 'Breaking News Title 3', content: 'Content of breaking news 3' },
        { title: 'Breaking News Title 3', content: 'Content of breaking news 3' },
        { title: 'Breaking News Title 3', content: 'Content of breaking news 3' },
        // Add more news items as needed
    ];

    return (
        <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest News</h5>
                <button
                    className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? 'View less' : 'View all'}
                </button>
            </div>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    {newsItems.slice(0, expanded ? newsItems.length : 3).map((newsItem, index) => (
                        <li key={index} className="py-3 sm:py-4">
                            <div className="flex items-center">
                                <div className="flex-1 min-w-0 ms-4">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        {newsItem.title}
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        {newsItem.content}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LatestNews;
