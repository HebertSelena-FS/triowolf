import React, { useState } from 'react';
import HeroSection from '../components/hero/Hero';
import ArtistInfo from '../components/artistInfo/Artist';
import Music from '../components/music/Music';
import NewSection from '../components/new/NewSection';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import Thoughts from '../components/thoughts/Thoughts';
import Footer from '../components/footer/Footer';
import { homeArtistOne } from '../components/data/artistData';
import { homeArtistTwo } from '../components/data/musicData';
import { homeArtistThree } from '../components/data/newData';
import { homeArtistFour } from '../components/data/thoughtsData';

const Home = () => {
  
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    
  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />       
        <ArtistInfo {...homeArtistOne}/>
        <Music {...homeArtistTwo}/>
        <NewSection {...homeArtistThree}/>  
        <Thoughts {...homeArtistFour} />        
        <Footer />  
    </>
  );
};

export default Home;