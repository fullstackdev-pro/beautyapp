import React from 'react';
import Rectangle65 from '../../../Data/images/instagram/Rectangle1.png'
import Rectangle67 from '../../../Data/images/instagram/Rectangle2.png'
import Rectangle64 from '../../../Data/images/instagram/Rectangle3.png'


function Instagram(props) {
  return (
    <div className=''>
      <div className='grid grid-cols-4 lg:mt-36 mt-20 lg:p-2 lg:h-80 h-24' style={{background: "#D3E5F6"}}>
        <img className='
          bottom-3 h-24 px-2
          lg:left-3 lg:bottom-10 lg:h-auto lg:px-0
          md:left-2 md:w-11/12 
          sm:left-0 sm:w-11/12
          relative' src={Rectangle65} alt="Instagram" />
        <img className='
          top-3 h-24 px-2
          lg:left-3 lg:top-12 lg:h-auto lg:px-0
          md:left-2 md:w-11/12 
          sm:left-1 sm:w-11/12         
          relative' src={Rectangle67} alt="Instagram" />
        <img className='
          bottom-3 h-24 px-2
          lg:left-3 lg:bottom-10 lg:h-auto lg:px-0
          md:left-2 md:w-11/12
          sm:left-2 sm:w-11/12          
          relative' src={Rectangle64} alt="Instagram" />
        <img className='
          top-3 h-24 px-2
          lg:left-3 lg:top-12 lg:h-auto lg:px-0
          md:left-2 md:w-11/12 
          sm:left-2 sm:w-11/12
          right-1        
          relative' src={Rectangle65} alt="Instagram" />
      </div>
    </div>
  );
}

export default Instagram;