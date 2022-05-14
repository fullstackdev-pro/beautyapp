import React from 'react';
import Cards from './components/Cards';
import Categories from './components/Categories';
import Instagram from './components/Instagram';
import Partners from './components/Partners';
import Populars from './components/Populars'
import HomeImage from './components/HomeImage';
import Types from './components/Types';

function Home() {
  return (
    <div className='lg:mt-8 mt-8'>
      <HomeImage />
      <Categories />
      <Cards />
      <Types />
      <Populars />
      <Partners />
      <Instagram />
    </div>
  );
}

export default Home;