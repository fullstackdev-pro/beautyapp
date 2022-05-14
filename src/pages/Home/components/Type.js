import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import datab from '../../../Data/Db'
import { headerImage } from '../../../redux/actions';



function Type(props) {
  const [data, setData] = useState(datab);
  const dispatch = useDispatch();
  return (
    <>
      {data.map((dataB, dataBIndex) => {
        const {id, name, mobile, type, img} = dataB;
        if (!mobile && type === 'types' && window.innerWidth > 1024) {
          return(
            <div key={id} className='cursor-pointer'
            onClick={() => dispatch(headerImage(name))}>
              <div>
                <img className='pt-4 mt-8' src={img} alt={name} />
              </div>
              <div className='mt-8 text-center pr-12 text-xl font-bold'>
                {name}
              </div>
            </div>
          )
        }
        if(type === 'Mobile' && mobile && window.innerWidth <= 1024) {
          return(
            <div key={id} className='cursor-pointer'
            onClick={() => dispatch(headerImage(name))}>
              <div>
                <img className='mt-4 w-full h-48' src={img} alt={name} />
              </div>
            </div>
          )
        }
      })}
    </>
  );
}

export default Type;