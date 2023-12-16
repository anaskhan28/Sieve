import React from 'react'
import './landing-work.css'
import Link from 'next/link';
import Image from 'next/image';

function LandingWorkCard() {
    return (
        <div className='LandingWorkCard-main'>
            <div className='how-it-work-box'>
                <div className='how-it-work-box-col-one'>
                    <div className='heading-how-it-work'>
                        So, how does it work?
                    </div>
                    <div className='subtitle-how-it-work'>
                        The process is pretty simple and yet amazing.
                    </div>
                </div>
                <div className='how-it-work-box-col-two'>
                    <div className='how-it-work-card'>
                        <div className='h-i-w-c-img'>
                            <Image
                                src="/h-i-w-1.png"
                                alt="Description of the image"
                                width={500}
                                height={300}
                            />
                        </div>
                        <div className='h-i-w-title'>
                            Custom Playlist
                        </div>
                        <div className='h-i-w-sub-title'>
                            Best playlist by the students for other students
                        </div>
                    </div>

                    <div className='how-it-work-card'>
                        <div className='h-i-w-c-img'>
                            <Image
                                src="/h-i-w-2.png"
                                alt="Description of the image"
                                width={500}
                                height={300}
                            />
                        </div>
                        <div className='h-i-w-title'>
                            Custom Playlist
                        </div>
                        <div className='h-i-w-sub-title'>
                            Best playlist by the students for other students
                        </div>
                    </div>

                    <div className='how-it-work-card'>
                        <div className='h-i-w-c-img'>
                            <Image
                                src="/h-i-w-3.png"
                                alt="Description of the image"
                                width={500}
                                height={300}
                            />
                        </div>
                        <div className='h-i-w-title'>
                            Custom Playlist
                        </div>
                        <div className='h-i-w-sub-title'>
                            Best playlist by the students for other students
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingWorkCard