import React from 'react';
import About from '../About/About';
import Emergency from '../Emergency/Emergency';
import Services from '../Services/Services';


const Home = () => {
    return (
        <>
            <div className="" id='home'>
                <div className=''>
                    <img className='w-full min-h-min'
                        src="https://image.freepik.com/free-vector/gradient-medical-facebook-cover_23-2149043587.jpg?w=826" alt="" />
                </div>
            </div>
            <About></About>
            <Emergency></Emergency>

        </>





    );
};

export default Home;