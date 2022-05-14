import React from 'react';
import Rectangle72 from './images/Rectangle 72.png'
import Rectangle73 from './images/Rectangle 73.png'
import Rectangle74 from './images/Rectangle 74.png'
import Rectangle75 from './images/Rectangle 75.png'

function Help(props) {
  return (
    <div>
      <div className='mt-10 ' style={{border: "0.5px solid #C8C8C8"}}></div>

      <p className='text-4xl text-center mt-8'>
        Вопрос - ответ
      </p>

      <img className='mt-4' src={Rectangle72} alt="Help" />

      <div className='mt-4 w-3/4 m-auto' style={{border: "0.5px solid #C8C8C8"}}></div>
      <img className='mt-14' src={Rectangle73} alt="Help" />

      <div className='mt-4 w-3/4 m-auto ' style={{border: "0.5px solid #C8C8C8"}}></div>
      <img className='mt-14' src={Rectangle74} alt="Help" />

      <div className='mt-4 w-3/4 m-auto ' style={{border: "0.5px solid #C8C8C8"}}></div>
      <img className='mt-14 ' src={Rectangle75} alt="Help" />

      <div className='mt-4 mb-24 w-3/4 m-auto ' style={{border: "0.5px solid #C8C8C8"}}></div>
    </div>
  );
}

export default Help;