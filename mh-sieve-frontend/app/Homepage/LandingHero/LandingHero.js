import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import './hero.css'

function LandingHero() {
    return (
        <div className='hero-main'>
            {/* <Image
                className='ring'
                src="/hero-ring.png"
                alt="Description of the image"
                width={500}
                height={300}
            /> */}
            <div className='hero-text'>
                <h5>WELCOME TO SIEVE</h5>
                <div className='slogan'>Curate, Rate, and Master<br />
                    Your Tech Playlist</div>
                <h4>
                    Unleash the Power of Crowd-Sourced Learning to Level Up Your Tech Skills
                </h4>
            </div>
            <div className='hero-join-link'>
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
            <div className='hero-image'>
                <Image
                    src="/hero.svg"
                    alt="Description of the image"
                    width={500}
                    height={300}
                />
            </div>
        </div>
    )
}

export default LandingHero