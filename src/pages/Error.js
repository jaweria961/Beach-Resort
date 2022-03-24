import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/banner';
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <div>
           <Hero>
               <Banner title='404' subtitle='pagenot fount'>
                   <Link to="/" className="btn-primary">Return Home</Link>
               </Banner>
           </Hero>
        </div>
    )
}
