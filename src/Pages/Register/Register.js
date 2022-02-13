import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useFirebase from '../Hooks/useFirebase';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const { signinWithGoogle } = useAuth();

    const auth = getAuth();

    const handleGetName = e => {
        setName(e.target.value)
    }
    const handleGetEmail = e => {
        setEmail(e.target.value)
    }
    const handleGetPassword = e => {
        setPassword(e.target.value)
    }
    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password, name)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            }).catch(error => {
                const err = error.message;
                console.log(err)
            })

    }
    return (
        <div>
            <h1 className="font-bold text-4xl text-gray-500 p-4">Sign Up  Form </h1>
            <div className="  text-center p-5">
                <form onSubmit={handleRegistration}>
                    <input className=" p-3 border-2 border-slate-900 rounded-md" onBlur={handleGetName} type="text" placeholder='Enter Name' name="name" id="name" /><br /><br />
                    <input className=" p-3 border-2 border-slate-900 rounded-md" onBlur={handleGetEmail} type="email" placeholder='Enter Email' name="email" id="email" /><br /><br />
                    <input className=" p-3 border-2 border-slate-900 rounded-md" onBlur={handleGetPassword} type="password" placeholder='Enter Password' name="password" id="password" />
                    <br /><br />
                    <button className=" rounded-xl bg-slate-600 text-white p-2 text-lg font-mono font-bold" type="submit">Submit</button>

                    <p>New User ? <NavLink to='/login'>
                        Login </NavLink></p>
                </form>
            </div>

            <div>-----------------------or----------------------</div>
            <button className='border-1 text-gray-200 p-3 text-lg font-mono font-bold bg-gray-500 rounded-xl' onClick={signinWithGoogle}>
                Sign in With Google
            </button>
        </div>
    );
};

export default Register;