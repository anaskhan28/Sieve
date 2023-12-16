'use client'
import React from 'react'
import axios from 'axios'
import Image from 'next/image';
import './login.css'


const GoogleLoginButton = () => {
    const handleGoogleLogin = async () => {
        window.open(process.env.NEXT_PUBLIC_SERVER_NAME + '/auth/google', '_self')
    }
    const handleCheck = async () => {
        // const res = await fetch("http://localhost:8000/checkLog", {
        //     method: "GET",
        //     credentials: "include", // Use "include" to send cookies with the request
        //     headers: {
        //         "Content-Type": "application/json", // Adjust the content type if needed
        //         // Add other headers as needed
        //     },
        // });
        const res = await axios.post('http://localhost:8000/checkLog', {}, { withCredentials: true })
        console.log(res.data)

    }
    return (
        <>
            <button onClick={handleGoogleLogin} className='googlebutton'>
                <div>
                    <Image
                        src="/google.png"
                        alt="Description of the image"
                        width={28}
                        height={28}
                    />
                    Continue with Google
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#454545"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                </svg>
            </button>
            {/* <button onClick={handleCheck}>check</button> */}
        </>
    )
}

export default GoogleLoginButton
