import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../Assets/edusity_assets/gallery-1.png';
import img2 from '../../Assets/edusity_assets/gallery-2.png';
import img3 from '../../Assets/edusity_assets/gallery-3.png';
import img4 from '../../Assets/edusity_assets/gallery-4.png';

const LatestNewsSlider = () => {
    const newsItems = [
        { title: 'Breaking News Title 1', content: 'Content of breaking news 1', image: img1 },
        { title: 'Breaking News Title 2', content: 'Content of breaking news 2', image: img2 },
        { title: 'Breaking News Title 3', content: 'Content of breaking news 3', image: img3 },
        { title: 'Breaking News Title 3', content: 'Content of breaking news 3', image: img4 },
        { title: 'Breaking News Title 3', content: 'Content of breaking news 3', image: img1 },
        { title: 'Breaking News Title 3', content: 'Content of breaking news 3', image: img2 },
        { title: 'Breaking News Title 3', content: 'Content of breaking news 3', image: img3 },
        { title: 'Breaking News Title 3', content: 'Content of breaking news 3', image: img3 },
        { title: 'Breaking News Title 3', content: 'Content of breaking news 3', image: img3 },
        { title: 'Breaking News Title 3', content: 'Content of breaking news 3', image: img3 },
        // Add more news items as needed
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest News</h5>
            </div>
            <div className="flex">
                <div className="w-1/2 pr-4">
                    <Slider {...sliderSettings}>
                        {newsItems.map((newsItem, index) => (
                            <div key={index}>
                                <img src={newsItem.image} alt={newsItem.title} className="w-full h-auto" />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="w-1/2 overflow-y-scroll" style={{ maxHeight: '500px' }}>
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        {newsItems.map((newsItem, index) => (
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
        </div>
    );
};

export default LatestNewsSlider;
