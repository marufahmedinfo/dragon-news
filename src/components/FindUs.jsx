import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const FindUs = () => {
    return (
        <div className='border border-gray-200 p-2 rounded-xl'>
            <h2 className='font-semibold mb-3'>Find Us On</h2>
            <div className="join flex join-vertical *:bg-base-100">
                <button className="btn join-item justify-start"><FaFacebookF size={30} color='#316FF6'/> Facebook</button>
                <button className="btn join-item justify-start"><FaTwitter size={30} color=' #1DA1F2'/> Twitter</button>
                <button className="btn join-item justify-start"><GrInstagram size={30} color='#F56040'/> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;