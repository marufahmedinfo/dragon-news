import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-3 items-center bg-base-200 p-2 rounded-lg'>
            <p className='bg-[#D72050] text-base-100 px-3 py-1'>Latest</p>
            {/* <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
             */}
             <Marquee className='space-x-10' pauseOnHover={true} speed={100}>
                <Link to='/news'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link to='/news'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link to='/news'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link to='/news'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link to='/news'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
             </Marquee>
        </div>
    );
};

export default LatestNews;