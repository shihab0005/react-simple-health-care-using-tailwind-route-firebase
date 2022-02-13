import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {

    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/doctorDetails.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])
    return (
        <div className='bg-lime-100'>
            <h1 className='font-mono font-extrabold  text-4xl text-slate-500 pt-6 pb-6 '>Our Expert Doctors</h1>
            <div className="grid grid-cols-3 gap-3 justify-evenly ">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>

        </div>
    );
};

export default Doctors;