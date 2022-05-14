import React from 'react';
import Type from './Type';

function Types(props) {
  return (
    <>
      <div className=''>
        <p className='text-center lg:text-4xl text-xl lg:mt-32 mt-20 cursor-pointer top-8 font-medium'>
          Подборки по типу кожи
        </p>
        <div className='lg:grid lg:grid-cols-5 lg:gap-5'>
          <Type />
        </div>
      </div>
    </>
  );
}

export default Types;