import React from 'react';
import GiftCard from './components/GiftCard';
import Rectangle80 from './images/Rectangle 80.png'

function Certificates(props) {
  return (
    <div className='mx-4'>
      <div className='mt-10 ' style={{border: "0.5px solid #C8C8C8"}}></div>
      <p className='lg:text-4xl lg:text-center lg:mt-12 mt-6 text-base text-left font-medium'>
        Система лояльности
      </p>
      <p className='lg:text-2xl lg:mt-8 lg:font-light mt-4 text-xs'>
        Cтань частью Beauty UP Club! 
      </p>
      <div className='mt-8'>
        <img src={Rectangle80} alt="" />
      </div>

      <p className='lg:text-2xl mt-8 font-light text-xs'>
        При первом заказе мы дарим вам карту постоянного покупателя. <br />
        За каждую 1000 рублей в чеке мы присваиваем Вам соответствующее количество наклеек. 
      </p>

      <p className='lg:text-2xl lg:mt-8 font-light text-xs mt-4'>
        <span className='lg:text-2xl lg:font-normal '>Например:</span> за 2456 рублей - 2 наклейки, за 5098 рублей - 5 наклеек. 
      </p>

      <p className='lg:text-2xl font-light text-xs mt-8'>
        За каждые 5 собранных наклеек мы дарим подарки! <br />
        Вы можете получить от нас приятный бонус  - от набора тканевых масок до полноразмерных <br /> продуктов для ухода за кожей!
      </p>

      <p className='text-center lg:text-4xl lg:mt-20 mt-8 text-base'>
        Подарочные сертификаты
      </p>

      <p className='lg:text-2xl mt-12 font-light text-xs'>
        Если Вы боитесь ошибиться в выборе подарка, то просто подарите сертификат от Beauty UP! <br />
        Выберите нужный номинал и понравившийся дизайн сертификата. <br />
        Добавьте сертификат в корзину и обязательно укажите свои данные. 
      </p>

      <p className='lg:text-2xl mt-8 font-light text-xs'>
        После оформления заказа мы свяжемся с Вами и пришлем сертификат в электронном виде. <br />
        Вы можете распечатать его или просто переслать человеку, которому хотите сделать подарок. <br />
        Каждый сертификат содержит уникальный промокод на соответствующую сумму. <br />
        Сертификат бессрочный.
      </p>

      <div className='grid grid-cols-2 gap-6 mt-20 place-content-center '>
        <GiftCard />
      </div>
      <div className='text-center'>
        <button className='border-4 mt-4 lg:px-20 lg:py-1.5 px-12 rounded-3xl lg:hidden ' style={{border: "4px solid #F6D3E4"}}>
          Заказать
        </button>
      </div>
    </div>
  );
}

export default Certificates;