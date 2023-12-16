'use client'
import React from 'react'
import axios from 'axios'

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
            <button onClick={handleGoogleLogin}>login with google</button>
            <button onClick={handleCheck}>check</button>
        </>
    )
}

export default GoogleLoginButton
