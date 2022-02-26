import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Profile = () => {

    const [appoints, setAppoints] = useState([]);

    useEffect(() => {

        fetch("https://mighty-bayou-60026.herokuapp.com/bookAppointment")
            .then(res => res.json())
            .then(data => setAppoints(data))

    }, []);

    const handleDeleteAppointment = id => {
        const url = `https://mighty-bayou-60026.herokuapp.com/bookAppointment/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert("Delete Appointment Successfully");
                    const remaining = appoints.filter(appoint => appoint._id !== id);
                    setAppoints(remaining)
                }
            })
    }


    return (
        <div>
            <div className="">
                <h1 className='text-2xl font-bold font-mono text-gray-600 p-5'>My Appointment with Doctor</h1>
                <table className="border-collapse border border-slate-800 m-10">
                    <thead>
                        <tr>

                            <th className="border border-slate-300 p-4">Name</th>
                            <th className="border border-slate-300 p-4">Address</th>
                            <th className="border border-slate-300 p-4">Email</th>
                            <th className="border border-slate-300 p-4">Gender</th>
                            <th className="border border-slate-300 p-4">Date</th>
                            <th className="border border-slate-300 p-4">Phone</th>
                            <th className="border border-slate-300 p-4">Delete</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            appoints.map(appoint => <tr key={appoint._id}>

                                <td className="border border-slate-300 p-2">{appoint.name}</td>
                                <td className="border border-slate-300 p-2">{appoint.address}</td>
                                <td className="border border-slate-300 p-2">{appoint.email}</td>
                                <td className="border border-slate-300 p-2">{appoint.gender}</td>
                                <td className="border border-slate-300 p-2">{appoint.date}</td>
                                <td className="border border-slate-300 p-2">{appoint.phone}</td>
                                <td className="border border-slate-300 p-2">
                                    <button
                                        className='border-1 rounded-lg  text-lg font-mono font-bold  p-2 mr-2  align-text-bottom bg-blue-600 text-slate-100'>
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteAppointment(appoint._id)}
                                        className='border-1 rounded-lg  text-lg font-mono font-bold  p-2  align-text-bottom bg-red-600 text-slate-100'>
                                        Delete
                                    </button>
                                </td>



                            </tr>)
                        }



                    </tbody>
                </table>
                <NavLink to='/doctors'>
                    <button className=' rounded-xl bg-slate-600 text-white px-4 py-2 text-lg font-mono font-bold'>Back</button>
                </NavLink>
            </div>
            <div className="">

            </div>
            <div className="">

            </div>
        </div >
    );
};

export default Profile;