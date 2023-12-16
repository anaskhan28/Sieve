import Image from 'next/image'
import Footer from './Homepage/Footer/Footer'
import LandingFeatures from './Homepage/LandingFeature/LandingFeatures'
import LandingHero from './Homepage/LandingHero/LandingHero'
import LandingOffer from './Homepage/LandingOffer/LandingOffer'
import LandingWorkCard from './Homepage/LandingWork/LandingWorkCard'
import Navbar from './Homepage/Navbar/Navbar'


export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <LandingHero></LandingHero>
      <LandingOffer></LandingOffer>
      <LandingFeatures></LandingFeatures>
      <LandingWorkCard></LandingWorkCard>
      <Footer></Footer>
    </>
  )
}