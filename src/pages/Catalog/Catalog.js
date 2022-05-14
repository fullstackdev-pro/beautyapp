import React from 'react';
import Categories from '../Home/components/Categories';
import Popular from '../Home/components/Popular';
import Rectangle62 from './images/Rectangle 62.png'

function Catalog(props) {
  return (
    <div>
      <Categories />
      <div className='w-full bg-Rectangle76 p-8'>
        <div className='flex'>
          <p className='cursor-pointer text-2xl font-light '>Фильтр</p>
          <p className='cursor-pointer text-2xl font-light pl-2 '>Сортировка</p>
        </div>
        <div className='grid grid-cols-5 gap-5 mt-16'>
          <Popular />
        </div>
        <span className='absolute cursor-pointer right-32 -bottom-36'>
          <img src={Rectangle62} alt="up icon" />
        </span>
      </div>
    </div>
  );
}

export default Catalog;