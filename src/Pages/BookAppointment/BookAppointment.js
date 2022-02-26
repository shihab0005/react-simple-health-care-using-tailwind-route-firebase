import React from 'react';
import useAuth from '../Hooks/useAuth';
import { useForm } from "react-hook-form";
import './BookAppointment.css'
import axios from 'axios'

const BookAppointment = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post("https://mighty-bayou-60026.herokuapp.com/bookAppointment", data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert("Appointment Fixed Successfully");
                    reset();
                }
            })

    };

    return (
        <div className='bg-gray-300 '>
            <h1 className='text-2xl font-bold font-mono text-gray-600 p-5'>Book Doctors Appointment</h1>
            <div className="form_container">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Enter Name' {...register("name", { required: true, maxLength: 20 })} />

                    <input placeholder='Enter Address' {...register("address", { required: true })} />

                    <input placeholder='Enter Email' {...register("email", { required: true })} />

                    <input placeholder='Enter Gender' {...register("gender", { required: true })} />

                    <input placeholder='Enter Reference if any' {...register("ref", { required: false })} />
                    <input type="date" placeholder='Enter Date' {...register("date", { required: false })} />

                    <input placeholder='enter Phone Number' {...register("phone", { required: true })} />

                    <input className=" rounded-xl bg-slate-600 text-white p-2 text-lg font-mono font-bold" type="submit" />
                </form>
            </div>

            {/* <h1 className='text-3xl font-mono font-extrabold text-slate-500 mt-10 p-10'>Dear <span className='text-red-500'>{user.displayName || user.email}</span>  sir,</h1>
            <h2 className='text-xl font-bold font-mono text-gray-600 '> Your Appointment is successfully done. Thanks for join with us.</h2> */}

        </div>
    );
};

export default BookAppointment;