import React, { useState } from 'react'
import datab from '../../../Data/Db'

function Partners(props) {
  const [data, setData] = useState(datab);
  return (
    <div className='grid grid-cols-3 mt-12'>
      {data.map((dataB, dataBIndex) => {
        const {id, category, img} = dataB;
        if (category === 'partners') {
          return(
            <div key={id} className='mt-6'>
              <img src={img}/>
            </div>
          )
        }
      })}
    </div>
  );
}

export default Partners;