import React from 'react'
import Hero from "../components/Hero";
import Banner from '../components/banner';
import { Link } from 'react-router-dom';
import Services from '../components/services';
import FeaturedRooms from '../components/FeatureRooms';
import Footer from '../components/footer';
import Button from '../components/StyledHero';
import StyledHero from '../components/StyledHero';
import RoomsContainer from '../components/RoomsContainer';


export default function Home() {
    return (
        <>
      <Hero hero="defaultHero">

        <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
            <Link to="/rooms" className="btn-primary">
                Our Rooms
            </Link>
        </Banner>
          </Hero>
          <Services/>
          <FeaturedRooms/>
         
      

          </>
    );
}

