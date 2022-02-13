import React from 'react';
import "./About.css"
const About = () => {
    return (
        <div id='about' className='mt-10 mb-5'>
            <h1 className='text-blue-600/100 font-mono text-2xl font-bold'>About Care Center</h1>
            <div className="about_container">
                <div className="image">
                    <img src="https://img.freepik.com/free-photo/smiling-woman-looking-senior-woman-sitting-wheel-chair_23-2147861527.jpg?w=740" alt="" />
                    <img src="https://img.freepik.com/free-photo/old-man-sitting-wheelchair-while-talking-nurse_23-2148239022.jpg?w=740" alt="" />
                    <img src="https://img.freepik.com/free-photo/young-doctor-supporting-his-patient_1098-2237.jpg?w=740" alt="" />
                    <img src="https://img.freepik.com/free-photo/closeup-shot-boy-getting-checkup-by-doctor_181624-34747.jpg?w=740" alt="" />
                </div>
                <div className="text_content">
                    <h1 className='text-red-500 font-mono font-black text-6xl'>25 Years of <br />
                        <span className=' Medical Excellence'> Medical Excellence</span></h1>
                    <div className="p-20">
                        <p className='font-mono text-lg text-slate-500 text-justify indent-8 '>
                            Our administrative and clinical team is second to none. We reiterates the pledge to help all and give hope to those who have lost hope. In this endeavor, while we have the best of an expert team of doctors taking care of the patients at one hand.
                        </p>
                        <div className='mt-5'>
                            <div className='flex ' >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                                <p className='font-mono text-lg text-slate-600 text-left font-bold'> Comprehensive Inpatient Services</p>
                            </div>
                            <div className='flex ' >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                                <p className='font-mono text-lg text-slate-600 text-left font-bold'>Quick Diagnosis</p>
                            </div>
                            <div className='flex ' >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                                <p className='font-mono text-lg text-slate-600 text-left font-bold'>Outpatient Services</p>
                            </div>
                            <div className='flex ' >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                                <p className='font-mono text-lg text-slate-600 text-left font-bold'> Medical And Surgical Services</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;