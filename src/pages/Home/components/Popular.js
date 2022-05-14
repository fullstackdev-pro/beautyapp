import React from 'react';
import { useState } from 'react';
import data from '../../../Data/Db';

function Popular(props) {
  const [noOfElement, setNoOfElement] = useState(window.innerWidth < 1024 ? 3 : 5);
  const FilteredData = data.filter(result => (result.type === 'goods' && result.category === 'popular'));
  const slice = FilteredData.slice(0, noOfElement);
  return (
    <>
      {slice.map((dataB, dataBIndex) => {
        const {id, type, category, description, name, img} = dataB;
        return(
          <div key={id}>
            <div>
              {window.innerWidth < 1024 ? 
              <span className='rounded-full p-1 absolute text-white' style={{background: "#FFC9A6"}}>ХИТ</span> 
              : <div></div>}
              <img className='pt-4' src={img} alt="" />
            </div>
            <div className='mt-2 lg:font-bold lg:text-base font-medium text-sm '>
              {name}
            </div>
            <div className='mt-4 pr-24'>
              {description}
            </div>
          </div>
        )
      })}
    </>
  );
}

export default Popular;