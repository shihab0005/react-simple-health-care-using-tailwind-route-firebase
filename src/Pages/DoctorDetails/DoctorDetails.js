import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

const DoctorDetails = () => {
    const { docId } = useParams();
    const [doctorDetails, setDoctorDetails] = useState([]);
    const [singleDoctor, setSingleDoctor] = useState({});

    useEffect(() => {
        fetch('https://mighty-bayou-60026.herokuapp.com/doctorsInfo')
            .then(res => res.json())
            .then(data => setDoctorDetails(data))

    }, [])

    useEffect(() => {
        const findDoctor = doctorDetails.find(doctor => doctor?.id.toString() === docId);
        setSingleDoctor(findDoctor)
    }, [doctorDetails]);


    return (
        <div>
            <div className=" grid grid-cols-2 ">
                <div className="p-10 ">
                    <h2 className='text-left font-mono font-extrabold  text-7xl text-slate-600 mt-10 mb-3'>{singleDoctor?.name}</h2>
                    <p className='text-left font-mono text-xl font-bold text-slate-400'>{singleDoctor?.shortdesc}</p>
                    <img className='p-10 m-3 w-full' src={singleDoctor?.img} alt="" />
                    <p className='text-center font-mono text-4xl font-bold text-slate-600 mb-2'>{singleDoctor?.name}</p>
                    <p className='text-center font-mono text-xl mb-2'>{singleDoctor?.specilist} / {singleDoctor?.room}</p>
                    <div className="  flex  justify-center align-center ">
                        <img src="https://img.icons8.com/doodle/48/000000/apple-phone.png" />
                        <h2 className=' font-mono text-xl mr-3'>{singleDoctor?.phone}</h2>
                    </div>
                    <div className="flex justify-center mb-2">
                        <img src="https://img.icons8.com/color/48/000000/facebook-new.png" />
                        <img src="https://img.icons8.com/fluency/48/000000/email-open.png" />

                        <img src="https://img.icons8.com/color/48/000000/youtube-squared.png" />
                    </div>
                    <NavLink to='/bookAppointment'>
                        <button className='border-1 rounded-lg  text-lg font-mono font-bold  p-2  align-text-bottom bg-orange-400 text-slate-100'>Requested Appoinment</button>
                    </NavLink>
                </div>
                <div className="my-60">
                    <h1 className='text-base font-mono text-left text-gray-500 mb-10'>{singleDoctor?.description}</h1>
                    <p className='text-lg font-mono text-left text-gray-500 mb-10'>Service : <span className='text-lg font-mono text-left  mb-10 text-pink-600'>{singleDoctor?.services}</span></p>
                    <p className='text-lg font-mono text-left text-gray-500 mb-10'>Location : <span className='text-lg font-mono text-left  mb-10 text-pink-600'>{singleDoctor?.location}</span></p>
                    <p className='text-lg font-mono text-left text-gray-500 mb-10'>Language : <span className='text-lg font-mono text-left  mb-10 text-pink-600'>{singleDoctor?.language}</span></p>

                    <NavLink to='/doctors'>
                        <button className=' rounded-xl bg-slate-600 text-white px-4 py-2 text-lg font-mono font-bold'>Back</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;