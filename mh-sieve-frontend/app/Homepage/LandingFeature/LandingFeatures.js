import React from 'react'
import './landingfeatures.css'
import Link from 'next/link';
import Image from 'next/image';

function LandingFeatures() {
    return (
        <>
            <div className='LandingFeatures-main'>
                <div className='LandingFeatures-box'>
                    <div className='LandingFeatures-box-col-one'>
                        <div className='features-box'>
                            Top Rated Playlist
                        </div>
                        <div className='features-box'>
                            New Playlists
                            by students
                        </div>
                        <div className='features-box'>
                            Search by
                            topics
                        </div>
                        <div className='features-box'>
                            Get best
                            result
                        </div>
                    </div>
                    <div className='LandingFeatures-box-col-two'>
                        <div className='LandingFeatures-box-col-two-left'>
                            <div className='L-box-col-two-left-one'>
                                Discover the best-rated tech playlists for accelerated learning
                            </div>
                            <div className='L-box-col-two-left-two-text'>
                                One of the top rated
                                Playlists
                            </div>
                            <div className='L-box-col-two-left-three'>
                                Discover the most highly rated and recommended playlists on Sieve. Our community of users consistently rates and reviews playlists, ensuring that you have access to the best learning resources available. Whether you're a beginner or an advanced learner, the Top Rated Playlist section is your gateway to curated excellence.
                            </div>
                        </div>
                        <div className='LandingFeatures-box-col-two-right'>
                            <Image
                                src="/features.svg"
                                alt="Description of the image"
                                width={500}
                                height={300}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='languages-features'>
                <div className='lang-box'>
                    <ul>
                        <li>
                            Frontend Development
                        </li>
                    </ul>
                </div>

                <div className='lang-box'>
                    <ul>
                        <li>
                            backend Development
                        </li>
                    </ul>
                </div>

                <div className='lang-box'>
                    <ul>
                        <li>
                            Android Development
                        </li>
                    </ul>
                </div>

                <div className='lang-box'>
                    <ul>
                        <li>
                            Data Structures
                        </li>
                    </ul>
                </div>

                <div className='lang-box'>
                    <ul>
                        <li>
                           Machine Learning
                        </li>
                    </ul>
                </div>

                <div className='lang-box'>
                    <ul>
                        <li>
                            Open Source
                        </li>
                    </ul>
                </div>

            </div>
        </>

    )
}

export default LandingFeatures