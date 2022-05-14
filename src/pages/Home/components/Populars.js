import React, { useState } from 'react';
import Popular from './Popular';

function Populars(props) {
  return (
    <>
      <p className='text-center lg:text-4xl text-xl mt-24 font-medium'>
        Популярное
      </p>
      <div className='grid lg:grid-cols-5 lg:gap-5 grid-cols-3 gap-3 mx-4 mt-12'>
        <Popular />
      </div>
      {window.innerWidth < 1024 ? 
        <div className='text-center'>
          <button className='border-4 mt-16 lg:px-32 px-12 lg:py-1.5 py-0.5 rounded-3xl' style={{border: "4px solid #F6D3E4", position: "center"}}>
            Еще
          </button>
        </div> : 
        <div></div>
      }
    </>
  );
}

export default Populars;