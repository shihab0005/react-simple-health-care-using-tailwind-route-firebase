import React from 'react';
import useAuth from '../Hooks/useAuth';

const BookAmbulance = () => {
    const { user } = useAuth()
    return (
        <div>
            <div className='bg-gray-200 '>
                <h1 className='text-3xl font-mono font-extrabold text-slate-500 mt-10 p-10'>Dear <span className='text-red-500'>{user.displayName || user.email}</span>  sir,</h1>
                <h2 className='text-xl font-bold font-mono text-gray-600 '> Your Ambulance Booking is successfully done. Thanks for join with us.</h2>
            </div>
        </div>
    );
};

export default BookAmbulance;