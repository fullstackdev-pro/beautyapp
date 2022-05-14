import React from 'react';
import { useDispatch } from 'react-redux';
import rectangle34 from '../../../Data/images/categories/Rectangle 34.png'
import rectangle61 from '../../../Data/images/categories/Rectangle 61.png'
import { headerImage } from '../../../redux/actions';

function Categories(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="grid grid-cols-8 mt-16 lg:grid hidden">
        <button className='text-3xl ml-20 font-light' 
        onClick={() => dispatch(headerImage('Лицо'))} >Лицо</button>
        <button className='text-3xl ml-20 font-light' 
        onClick={() => dispatch(headerImage('Тело'))} >Тело</button>
        <button className='text-3xl ml-20 font-light'
        onClick={() => dispatch(headerImage('Волосы'))} >Волосы</button>
        <button className='text-3xl ml-20 font-light'
        onClick={() => dispatch(headerImage('Новинки'))} >Новинки</button>
        <button className='text-3xl ml-24 font-light'
        onClick={() => dispatch(headerImage('Подборки'))} >Подборки</button>
        <button className='text-3xl ml-32 font-light'
        onClick={() => dispatch(headerImage('Наборы'))} >Наборы</button>
        <img className='cursor-pointer ml-32' src={rectangle34} alt="hearth" />
        <img className='cursor-pointer ml-16' src={rectangle61} alt="shop card" />
      </div >
      <div className="border-b mt-2 lg:flex hidden" style={{border: "0.5px solid #C8C8C8"}}></div>
    </div>
  );
}

export default Categories;