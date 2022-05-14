import React from 'react';
import rectangle from "./images/Rectangle 70.png"
import logo1 from "./images/наклейка розовая 1.png"
import logo2 from "./images/лого цветное 1.png"
import rectangle1 from "./images/Rectangle 36.png"
import rectangle2 from "./images/Rectangle 37.png"
import rectangle3 from "./images/Rectangle 38.png"
import { Link } from 'react-router-dom';
import menu from './images/menu.png'
import mobile from './images/mobile/Rectangle 70.png'
import mobile1 from './images/mobile/Rectangle 62.png'
import mobile2 from './images/mobile/Rectangle 34.png'
import mobile3 from './images/mobile/Rectangle 61.png'
import { headerImage } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { FaAngleRight } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { BiShoppingBag } from 'react-icons/bi';

function Header() {
  const dispatch = useDispatch();

  return (
    <div className=''>
      <div className='absolute h-full w-9/12 z-50 drop-shadow-2xl lg:hidden hidden'>
        <div className='bg-white pl-8 pr-2 py-6 border-b-2'>
            <div className='flex justify-between'>
              <div>Каталог</div>
              <div className='mr-2'> <FaAngleRight /> </div>
            </div>
          </div>
          <div className='bg-white pl-8 pr-2 py-6 border-b-2'>
            <div>Доставка</div>
          </div>
          <div className='bg-white pl-8 pr-2 py-6 border-b-2'>
            <div>Подарочные сертификаты</div>
          </div>
          <div className='bg-white pl-8 pr-2 py-6 border-b-2'>
            <div>Акции</div>
          </div>
          <div className='bg-white pl-8 pr-2 py-6 border-b-2'>
            <div>Бренды</div>
          </div>
          <div className='bg-white pl-8 pr-2 py-6 border-b-2'>
            <div>Контакты</div>
          </div>
          <div className='bg-white pl-8 pr-2 py-6 border-b-2'>
          <div className='flex justify-between'>
            <div>Корзина</div>
            <div className='mr-2'> <FaAngleRight /> </div>
          </div>
        </div>
        <div className='bg-zinc-200 flex pl-8 pr-2 py-5 border-b-2'>
          <BiShoppingBag className='h-7 mr-2' />  <div>Корзина</div>
        </div>
        <div className='bg-zinc-200 flex pl-8 pr-2 py-5 border-b-2'>
          <FaHeart className='h-7 mr-2' />  <div>Избранное</div>
        </div>
      </div>

      <img className='h-auto lg:grid hidden' src={rectangle} alt="rectangle" />
      <img className='h-10 lg:hidden sm:h-12 md:h-14 ' src={mobile} alt="rectangle" />
      <div className="lg:flex hidden links mt-10 xl:pl-20 text-2xl ">
        <Link to="/catalog" className='pr-10 pl-40'>Каталог</Link>
        <Link to="/delivery" className='pr-10'>Доставка</Link>
        <Link to="/brand" className='pr-10'>Бренды</Link>
        <Link to="/aboutUs" className='pr-10'>О нас</Link>
        <Link to="/certificates" className='pr-10'>Сертификаты</Link>
        <Link to="/" className='pr-10'>Акции</Link>
      </div>
      <div className='flex lg:mt-12 mt-4 lg:ml-8 ml-4 lg:max-h-14'>
        <img className='lg:hidden md:max-h-12 md:w-8 w-5 pt-2 max-h-7 pointer' src={menu} alt="" />
        <div className='grid grid-cols-2 ml-4'
        onClick={() => dispatch(headerImage('home'))}>
          <Link to="/">
            <img className='cursor-pointer lg:max-h-20 md:max-h-16 max-h-7 mt-1' src={logo1} alt="logo" />
          </Link>
          <Link to="/">
            <img className=' cursor-pointer lg:max-h-20 md:max-h-12 max-h-6 mt-2' src={logo2} alt="logo" />
          </Link>
        </div>
        <input className='border mt-2 mb-2 pl-3 pr-3 w-3/6 ml-32 lg:flex hidden' type="text" />
        <img className='ml-8 mt-1.5 mb-1.5 cursor-pointer lg:flex hidden' src={rectangle1} alt="icon" />
        <img className='ml-3 mt-1.5 mb-1.5 cursor-pointer lg:flex hidden' src={rectangle2} alt="icon" />
        <img className='ml-3 mt-1.5 mb-1.5 cursor-pointer lg:flex hidden' src={rectangle3} alt="icon" />
        <div className='grid grid-cols-3 absolute pt-2 right-2 sm:top-16 sm:mt-1 sm:max-right-16 md:top-20 md:mt-2 md:right-32 max-h-auto'>
          <img className='h-5 mr-2 cursor-pointer lg:hidden ' src={mobile1} alt="icon" />
          <img className='h-5 cursor-pointer lg:hidden ' src={mobile2} alt="icon" />
          <img className='h-5 cursor-pointer lg:hidden ' src={mobile3} alt="icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;