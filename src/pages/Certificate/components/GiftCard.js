import React, { useState } from 'react';
import Rectangle82 from '../images/Rectangle 82.png'
import Rectangle89 from '../images/Rectangle 89.png'
import Rectangle90 from '../images/Rectangle 90.png'
import Rectangle91 from '../images/Rectangle 91.png'
import Rectangle92 from '../images/Rectangle 92.png'

function GiftCard(props) {
  const [size, setSize] = useState(window.innerWidth < 1024 ? true : false);
  return (
    <>
      <div>
        <div>
          <img src={Rectangle82} alt="" />
        </div>
        <div className='relative left-36'>
          <button className='border-4 mt-4 px-20 py-1.5 rounded-3xl lg:grid hidden' style={{border: "4px solid #F6D3E4"}}>
            Заказать
          </button>
        </div>
      </div>

      <div>
        <div>
          <img src={Rectangle89} alt="" />
        </div>
        <div className='relative left-36'>
          <button className='border-4 mt-4 px-20 py-1.5 rounded-3xl lg:grid hidden' style={{border: "4px solid #F6D3E4"}}>
            Заказать
          </button>
        </div>
      </div>

      <div>
        <div>
          <img src={Rectangle90} alt="" />
        </div>
        <div className='relative left-36'>
          <button className='border-4 mt-4 px-20 py-1.5 rounded-3xl lg:grid hidden' style={{border: "4px solid #F6D3E4"}}>
            Заказать
          </button>
        </div>
      </div>

      <div>
        <div>
          <img src={Rectangle91} alt="" />
        </div>
        <div className='relative left-36'>
          <button className='border-4 mt-4 px-20 py-1.5 rounded-3xl lg:grid hidden' style={{border: "4px solid #F6D3E4"}}>
            Заказать
          </button>
        </div>
      </div>

      <div >
        <div>
          <img src={Rectangle92} alt="" />
        </div>
        <div className='relative lg:left-36 '>
          <button className='border-4 mt-4 lg:px-20 lg:py-1.5 px-12 rounded-3xl lg:grid hidden' style={{border: "4px solid #F6D3E4"}}>
            Заказать
          </button>
        </div>
      </div>
    </>
  );
}

export default GiftCard;