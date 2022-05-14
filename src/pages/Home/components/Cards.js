import React from 'react';
import Card from './Card';

function Cards(props) {
  return (
    <>
      <p className='text-center lg:text-4xl text-xl lg:font-normal font-medium mt-12 mb-8'>
        Новинки
      </p>
      <div className='grid lg:grid-cols-5 grid-cols-3 gap-5 mt-4 mx-2 px-2'>
        <Card />
      </div>
      <div className='text-center'>
        <button className='border-4 mt-16 lg:px-32 px-24 lg:py-1.5 py-0.5 rounded-3xl' style={{border: "4px solid #F6D3E4", position: "center"}}>
          Еще
        </button>
      </div>
    </>
  );
}

export default Cards;