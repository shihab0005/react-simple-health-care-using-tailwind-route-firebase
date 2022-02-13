import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';


import Navlink from '../Navilnk/Navlink';

const Header = () => {
    const { user, logOUT } = useAuth();
    return (
        <>
            <Navlink></Navlink>
            <div>
                <nav className=' '>
                    <ul className='flex bg-slate-400 p-5 '>
                        <NavLink to='/home'>
                            <li className='mr-5 p-3 hover:bg-slate-500 text-white rounded-md cursor-pointer font-mono text-lg'>Home</li>
                        </NavLink>
                        <NavLink to='/about'>
                            <li id="about" className='mr-5 p-3 hover:bg-slate-500 text-white rounded-md cursor-pointer font-mono text-lg'>About</li>
                        </NavLink>
                        <NavLink to='/services'>
                            <li className='mr-5 p-3 hover:bg-slate-500 text-white rounded-md cursor-pointer font-mono text-lg'>Services</li>
                        </NavLink>
                        <NavLink to='/doctors'>
                            <li className='mr-5 p-3 hover:bg-slate-500 text-white rounded-md cursor-pointer font-mono text-lg'>Doctors</li>
                        </NavLink>

                        {
                            user.email ?
                                <button className=" rounded-xl bg-slate-600 text-white p-2 text-lg font-mono font-bold" onClick={logOUT}>Logout</button>
                                :
                                <NavLink to='/login'>
                                    <li className='mr-5 p-3 hover:bg-slate-500 text-white rounded-md cursor-pointer font-mono'>Login</li>
                                </NavLink>}
                        {user?.email && <span className='font-mono text-lg text-white mr-5 p-3 '>Hello,{user.displayName || user.email}</span>}

                    </ul>

                </nav>
            </div>
        </>

    );
};

export default Header;