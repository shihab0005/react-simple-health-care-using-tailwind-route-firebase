import React from 'react';

import './Footer.css'
const Footer = () => {
    return (
        <div className='footer_container '>
            <div className="imp_link">
                <h4 className='font-mono text-3xl p-3 mb-3'>Important Links</h4>
                <div className="icons">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-10 text-lg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-10 text-xl" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-10 text-xl" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-10 text-xl" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-10 text-xl" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-10 text-xl" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            <div className="subscribe">
                <h4 className='font-mono text-3xl p-3 mb-3'>Subscribe</h4>
                <div className="">
                    <input type="email" name="email" id="" />
                    <br /><br />
                    <button className='border-3 rounded-lg  p-3 text-xl bg-red-600 text-white'>Subscribe</button>
                </div>
            </div>
            <div className="payment">
                <h4 className='font-mono text-3xl p-3 mb-3'>Payment Methods</h4>
                <div className="payment_icons">
                    <i class="fab fa-cc-paypal"></i>
                    <i class="fab fa-cc-visa"></i>
                    <i class="fab fa-cc-amex"></i>
                    <i class="fab fa-cc-visa"></i>
                    <i class="fab fa-cc-mastercard"></i>
                    <i class="fab fa-cc-stripe"></i>
                    <i class="fab fa-amazon-pay"></i>
                </div>
            </div>
        </div>
    );
};

export default Footer;