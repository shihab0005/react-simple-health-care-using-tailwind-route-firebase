import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Services.css"
const Services = () => {
    return (
        <>
            <div className='mt-10'>
                <h1 className='font-mono text-cyan-500 font-extrabold text-7xl'>We Help you</h1>
                <h1 className='font-mono text-8xl text-cyan-700 font-black'>Get Well Sooner!</h1>
                <div className="services_container">

                    <div className="">
                        <img className='w-80' src="https://img.freepik.com/free-photo/doctor-examines-patient-medicine-health-care-concept_1328-3120.jpg?w=740" alt="" />
                        <h1 className='font-mono text-lg text-gray-600 font-semibold'>24 Hours Service</h1>
                    </div>
                    <div className="">
                        <img className='w-80' src="https://img.freepik.com/free-photo/doctor-giving-presentation-team-interim-doctors_107420-84781.jpg?w=740" alt="" />
                        <h1 className='font-mono text-lg text-gray-600 font-semibold'>Medical Professionals</h1>
                    </div>
                    <div className="">
                        <img className='w-80' src="https://img.freepik.com/free-photo/microbiologist-doctor-taking-blood-sample-tube-from-rack-with-machines-analysis-lab-background_482257-527.jpg?w=826" alt="" />
                        <h1 className='font-mono text-lg text-gray-600 font-semibold'>Quality Lab Services</h1>
                    </div>
                    <div className="">
                        <img className='w-80' src="https://img.freepik.com/free-photo/hand-cupping-stethoscope-health-concept_53876-129536.jpg?w=740" alt="" />
                        <h1 className='font-mono text-lg text-gray-600 font-semibold'>Free Consultations</h1>
                    </div>


                </div>

            </div>

            <div className="">
                <h1 className='font-mono text-cyan-500 font-extrabold text-7xl my-5'>Others Services</h1>

                <div className="flex justify-center">
                    <div className="grid grid-cols-2 p-5">
                        <img className='w-96' src="https://img.freepik.com/free-photo/paramedic-team-rescuing-young-critical-patient_53876-139567.jpg?w=740" alt="" />

                        <img className='w-96' src="https://img.freepik.com/free-vector/emergency-ambulance-with-coronavirus-concept_23-2148534627.jpg?w=740" alt="" />

                        <img className='w-96' src="https://img.freepik.com/free-vector/rescue-service-isometric-set_1284-18033.jpg?w=740" alt="" />
                    </div>

                    <div className="my-24">
                        <h1 className='font-mono text-gray-500 font-extrabold text-3xl mb-5'>Ambulance Service</h1>
                        <h1 className='font-mono text-2xl text-slate-500 text-justify indent-8 mb-5' >
                            Overview of Ambulance Service
                        </h1>
                        <div>
                            <h1 className='font-mono text-xl text-slate-700 text-justify indent-8 mb-5'>What to Expect?</h1>
                            <div className='flex ' >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                                <p className='font-mono text-lg text-slate-600 text-left font-bold'> Standard Ambulance with Proper equipment</p>
                            </div>
                            <div className='flex ' >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                                <p className='font-mono text-lg text-slate-600 text-left font-bold'> Stretchers are available to carrying the patient</p>
                            </div>
                            <div className='flex ' >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                                <p className='font-mono text-lg text-slate-600 text-left font-bold'> Service available to go anywhere in Bangladesh</p>
                            </div>
                            <div className='flex ' >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                                <p className='font-mono text-lg text-slate-600 text-left font-bold'>Clean & Hygienic Ambulance</p>
                            </div>
                            <div className='flex ' >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                                <p className='font-mono text-lg text-slate-600 text-left font-bold'> Certified & Skilled Driver</p>
                            </div>
                            <NavLink to='/bookAmbulance'>
                                <button className=" rounded-xl bg-yellow-500 text-white p-2 text-lg font-mono font-bold mt-5">Book Ambulance</button>
                            </NavLink>
                        </div>
                    </div>

                </div>
            </div>

            <div className=" flex justify-center ">
                <div className=" p-5">
                    <h1 className='font-mono text-gray-500 font-extrabold text-3xl mb-5'>Pharmecy</h1>
                    <p className='font-mono text-lg text-slate-500 text-justify indent-8 '>
                        pharmacy, the science and art concerned with the preparation and standardization of drugs. Its scope includes the cultivation of plants that are used as drugs, the synthesis of chemical compounds of medicinal value, and the analysis of medicinal agents. Pharmacists are responsible for the preparation of the dosage forms of drugs, such as tablets, capsules, and sterile solutions for injection
                    </p>
                    <NavLink to='/bookAmbulance'>
                        <button className=" rounded-xl bg-yellow-500 text-white p-2 text-lg font-mono font-bold mt-5">Order Medicine</button>
                    </NavLink>
                </div>
                <div className="grid grid-cols-2  gap-5">
                    <img className='w-100 ' src="https://img.freepik.com/free-photo/pharmacist-checking-medicines-drugstore_259150-57964.jpg?w=740" alt="" />
                    <img className='w-100 ' src="" alt="" />
                    <img className=' ' src="https://img.freepik.com/free-photo/closeup-view-pharmacist-hand-taking-medicine-box-from-shelf-drug-store_342744-320.jpg?w=740" alt="" />
                    <img className='' src="https://img.freepik.com/free-photo/young-woman-pharmacist-pharmacy_1303-25532.jpg?w=740" alt="" />
                </div>

            </div>
        </>

    );
};

export default Services;