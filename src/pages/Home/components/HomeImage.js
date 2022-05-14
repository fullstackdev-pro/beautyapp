import React, { useReducer } from 'react';
import { useSelector } from 'react-redux';
import data from '../../../Data/Db'



function HomeImage() {
  const imgName = useSelector(state => state.imgName)
  return (
    <>
      <div className='lg:mt-12 w-full '>
        {data.map((data, dataIndex) => {
          const {id, name, img, type, content} = data;
          if (name === imgName && type === 'header' && window.innerWidth > 1024) {
            // console.log(img());
            return (
              <div key={id}>
                <img src={img} alt={name}/>
              </div>
            )
          }else if(name === imgName && type === 'header' && window.innerWidth <= 1024){
            return (
              <div key={id}>
                <img src={img} alt={name}/>
                <p>
                  {content}
                </p>
              </div>
            )
          }
        })}
      </div>
    </>
  )
}

export default HomeImage;