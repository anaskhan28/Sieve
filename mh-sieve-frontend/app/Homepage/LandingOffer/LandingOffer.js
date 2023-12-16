import React from 'react'
import './landingoffer.css'
import Link from 'next/link';
import Image from 'next/image';

function LandingOffer() {
    return (
        <div className='landing-offer'>
            <div className='landing-offer-text'>
                We offer a way for a students<br />
                to get precise resources
            </div>
            <div className='landing-offer-card-main'>
                <div className='card-layout-main'>
                    <div className='card-layout-main-left'>
                        <div className='card-layout-main-left-card'>
                            <div className='card-layout-main-left-card-col-one'>
                                <Image
                                    src="/saly-1.png"
                                    alt="Description of the image"
                                    width={500}
                                    height={300}
                                />
                            </div>
                            <div className='card-layout-main-left-card-col-two'>
                                Using Sieve will save time and money
                            </div>
                        </div>
                    </div>
                    <div className='card-layout-main-right'>
                        <div className='card-layout-main-right-col-one'>
                            
                            <div className='card-layout-main-right-col-one-row-two'>
                                Great resources to learn anything
                            </div>
                            <div className='card-layout-main-right-col-one-row-one'>
                                <Image
                                    src="/saly-4.png"
                                    alt="Description of the image"
                                    width={500}
                                    height={300}
                                />
                            </div>
                        </div>
                        <div className='card-layout-main-right-col-two'>
                            <div className='card-layout-main-right-col-two-card-one'>
                                Trendy playlists
                                <div className='card-layout-main-right-col-two-card-one-img'>
                                    <Image
                                        src="/saly-3.png"
                                        alt="Description of the image"
                                        width={500}
                                        height={300}
                                    />
                                </div>
                            </div>
                            <div className='card-layout-main-right-col-two-card-two'>
                                Sieve
                                offers a way to
                                become top 1%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingOffer