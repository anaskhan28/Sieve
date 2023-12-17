import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import './navbar.css'


function Navbar() {
    return (
        <div className='main-nav'>
            <div className='logo'>
                <Image
                    src="/logo.svg"
                    alt="Description of the image"
                    width={100}
                    height={100}
                />
            </div>
            <div className='menu-links'>
                <Link href="">
                    home
                </Link>
                <Link href="/playlist">
                    playlist
                </Link>
                <Link href="/login">
                    sign in
                </Link>
                <Link href="/login">
                    Join Now
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default Navbar