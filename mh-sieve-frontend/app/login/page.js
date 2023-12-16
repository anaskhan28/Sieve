import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import GoogleLoginButton from './GoogleLoginButton'
import './login.css'
const page = () => {

    return (
        <div className='login-master'>
            <div className='login-left'>
                <div className='login-nav'>
                    <Image
                        src="/black-logo.svg"
                        alt="Description of the image"
                        width={100}
                        height={100}
                    />
                </div>
                <div className='login-image'>
                    <Image
                        src="/login.svg"
                        alt="Description of the image"
                        width={100}
                        height={100}
                    />
                </div>
            </div>
            <div className='login-right'>
                <div className='google-login'>
                    <div className='login-heading'>
                        Login
                        <div className='login-subtitle'>
                            Continue a journey with us
                        </div>
                        
                    </div>

                    <GoogleLoginButton />
                </div>
            </div>


        </div>
    )
}

export default page
