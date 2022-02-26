import React from 'react';
import { NavLink } from 'react-router-dom';

const Doctor = ({ doctor }) => {
    const { id, name, img, room, specilist, phone } = doctor;
    return (
        <div className='border-2 border-orange-300 m-5 p-5 bg-white '>
            <div className="p-6  flex justify-center align-center ">
                <img className='p-3 h-30 w-44 rounded-full ' src={img} alt="" />
                <div className="p-3">
                    <p className='font-mono text-2xl font-bold text-red-500'>{name}</p>
                    <p className='font-mono text-xl'>{specilist} / {room}</p>
                    <div className="flex justify-between align-center p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                        </svg>
                        <h2 className='font-mono text-xl '>{phone}</h2>
                    </div>

                </div>

            </div>
            <NavLink to={`/bookAppointment`} >
                <button className='border-1 rounded-lg  text-lg font-mono font-bold  p-2 mr-2  align-text-bottom bg-orange-400 text-slate-100'>Book Appointment</button>
            </NavLink>
            <NavLink to={`/doctorDetails/${id}`} >
                <button className='border-1 rounded-lg  text-lg font-mono font-bold  p-2  align-text-bottom bg-orange-400 text-slate-100'>View Profile</button>
            </NavLink>

        </div>
    );
};

export default Doctor;