import React from 'react';
import { Link } from 'react-router-dom';
import Rectangle36 from '../Header/images/Rectangle 36.png'
import Rectangle37 from '../Header/images/Rectangle 37.png'
import Rectangle38 from '../Header/images/Rectangle 38.png'
import Rectangle40 from '../Header/images/Rectangle 40.png'

function Footer(props) {
  return (
    <>
      <div className='
      grid 
      lg:grid-cols-4 lg:mt-24
      md:grid-cols-1
      sm:grid-cols-1
      gap-1 mt-16 mx-4'>
        <div className=''>
          <div className='lg:text-4xl text-xl font-normal'>
            <Link to="/brand">Бренды</Link> <br />
          </div>
          <div className='lg:text-4xl pt-5 text-xl font-normal'>
            <Link to="/delivery">Доставка</Link> <br />
          </div>
          <div className='lg:text-4xl pt-5 text-xl font-normal'>
            <Link to="/certificates">Система <br/> лояльности</Link> <br />
          </div>
          <div className='lg:text-4xl pt-5 text-xl font-normal'>
            <Link to="/certificates">Сертификаты</Link>
          </div>
        </div>
        
        <div className=''>
          <p className='lg:text-4xl pt-4 text-xl font-normal'>Компания</p>
          <div className='hidden lg:grid'>
            <div className='text-3xl font-extralight pt-2 '>
              <Link to="/aboutUs">О компании</Link> <br />
            </div>
            <div className='text-3xl font-extralight pt-2'>
            <Link to="/contact">Контакты</Link> <br />
            </div>
            <div className='text-3xl font-extralight pt-2 '>
            <Link to="/contact">Реквизиты</Link> <br />
            </div>
            <div className='text-3xl font-extralight pt-3 '>
            <Link to="/LinkboutUs">Политика <br/> конфидециальности</Link>
            </div>
          </div>
        </div>
        
        <div className='mt-4 lg:mt-0'>
          <p className='lg:text-4xl lg:font-light text-xl font-normal'>Помощь</p>
          <div className='text-3xl font-extralight pt-3 hidden lg:grid'>
            <Link to="help">Вопрос-ответ</Link>
          </div>
        </div>
        
        <div className='lg:mt-0 mt-12 text-center'>
          <button 
            className='
              lg:px-6 lg:w-full lg:text-xl 
              px-4 w-9/12 rounded-3xl text:xs border-4 py-2' 
            style={{border: "4px solid #F6D3E4"}}>    
              Подписаться на рассылку
          </button>
          <div>
            <p className='lg:text-2xl lg:text-left text-lg left-1 mt-8 right-5 relative'>
              8 903 875-01-01 <br />
              beauty.up.shop@yandex.ru
            </p>
          </div>
        </div>
      </div>

      <div className='lg:mt-48 mt-28 mb-12 pb-16'> 
        <span className='text-2xl lg:absolute lg:grid lg:mt-0 hidden'>
          2022 ©Beauty UP!
        </span>
        <div className='flex justify-center'>
          <img className='cursor-pointer' src={Rectangle36} alt="" />
          <img className='cursor-pointer' src={Rectangle37} alt="" />
          <img className='cursor-pointer' src={Rectangle38} alt="" />
          <img className='cursor-pointer' src={Rectangle40} alt="" />
        </div>
        <span className='text-2xl lg:hidden lg:mt-0 grid mt-6 place-content-center'>
          2022 ©Beauty UP!
        </span>
      </div>
    </>
  );
}

export default Footer;