import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/banner';
import { Link } from 'react-router-dom';
import RoomsContainer from '../components/RoomsContainer';

const Rooms = () => {
    return (
        <div>
          <Hero hero="roomsHero">
               <Banner title='Our Rooms' subtitle=''>
                   <Link to="/" className="btn-primary">
                       Return Home
                       </Link>
               </Banner>
           </Hero>
           <RoomsContainer />
        </div>
    )
}

export default Rooms;
