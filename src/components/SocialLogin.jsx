import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-semibold mb-3'>Login With</h2>
            <div className='*:w-full space-y-2'>
                <button className='btn border border-blue-950'><FcGoogle size={30}/>Login With Google</button>
                <button className='btn border border-blue-950'><BsGithub size={30}/>Login With GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;