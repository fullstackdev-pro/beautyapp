import React from 'react';
import { useState } from 'react';
import data from '../../../Data/Db'

function Card(props) {
  const [noOfElement, setNoOfElement] = useState(window.innerWidth < 1024 ? 3 : 5);
  const FilteredData = data.filter(result => (result.type === 'goods' && result.category === 'new'));
  const slice = FilteredData.slice(0, noOfElement);
  return (
      <> 
      {slice.map((dataB, dataBIndex) => {
        const {id, name, img, description} = dataB;
        return(
          <div key={id}>
            <div>
              <span className='rounded-full p-1 absolute text-white' style={{background: "#F6D3E4"}}>New</span>
              <img className='pt-4 ml-4' src={img} alt="" />
            </div>
            <div className='mt-2 lg:font-bold lg:text-base font-medium text-sm'>
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

export default Card;