import React from 'react'
import './footer.css'
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-part-one'>
                <div className='footer-part-one-text'>
                    <div className='f-p-o-text-blod'>
                        Get Sieve updates to<br /> your inbox
                    </div>
                </div>
                <div className='f-p-o-search'>
                    <div className="search-container">
                        <input type="text" placeholder="Your email address..." />
                        <button>SUBMIT
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M18 8L22 12L18 16" />
                                <path d="M2 12H22" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className='footer-part-two'>
                <div className='footer-part-two-row-one'>
                    <Image
                        src="/logo.svg"
                        alt="Description of the image"
                        width={500}
                        height={300}
                    />
                    <div className='copyright'>
                        2023 Sieve ✽ All rights reserved
                    </div>
                </div>
                <div className='footer-part-two-row-two'>
                    <Image
                        src="/discord.png"
                        alt="Description of the image"
                        width={24}
                        height={24}
                    />
                     <Image
                        src="/telegram.png"
                        alt="Description of the image"
                        width={24}
                        height={24}
                    />
                     <Image
                        src="/twitter.png"
                        alt="Description of the image"
                        width={24}
                        height={24}
                    />
                </div>
            </div>
        </div>
    );
}

export default Footer;
