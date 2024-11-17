import { list } from 'postcss';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCart from '../components/layout-components/NewsCart';

const CategoryNews = () => {
    const { data: news } = useLoaderData();
    console.log(news)
    return (
        <div>
            <h2 className='font-semibold mb-3'>Dragon News Home</h2>
            <p className='text-gray-400 text-sm'>{news.length} News Found On This Category</p>
            <div>
                {
                    news.map((singleNews) => <NewsCart key={singleNews._id} news={singleNews}></NewsCart>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;