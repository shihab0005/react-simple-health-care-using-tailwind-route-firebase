import React from 'react';
import { NavLink } from 'react-router-dom';

const Emergency = () => {
    return (
        <div className="bg-slate-600 p-10 flex justify-between">
            <div>
                <h1 className='text-slate-100 font-black text-6xl font-mono'>Have an emergency?</h1>
                <h1 className='text-slate-200 font-black text-6xl font-mono'>Book Your Visit</h1>
            </div>
            <div className="">
                <form className='justify-center align-center'>
                    <input className='bg-slate-100 m-3 p-3 border-2  rounded-md' type="text" placeholder='Enter Name' />
                    <input className='bg-slate-100 m-3 p-3 border-2  rounded-md' type="email" placeholder='Enter email' />
                    <br />
                    <input className='bg-slate-100 m-3 p-3 border-2  rounded-md' type="text" placeholder='Enter phone' />
                    <input className='bg-slate-100 m-3 p-3 border-2  rounded-md' type="date" placeholder='Enter date' />
                    <br />
                    <NavLink to='/bookAppointment'>
                        <button className='border-3 rounded-lg bg-yellow-400 p-3 text-xl'>Book Now</button>
                    </NavLink>

                </form>


            </div>
        </div>
    );
};

export default Emergency;