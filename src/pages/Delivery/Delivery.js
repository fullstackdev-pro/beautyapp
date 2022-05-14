import React from 'react';

function Delivery(props) {
  return (
    <div className='lg:mx-0 mx-6'>
      <div className='mt-10' style={{border: "0.5px solid #C8C8C8"}}></div>
        <p className='lg:mt-24 lg:text-4xl lg:text-center mt-4 text-base'>
          Доставка и оплата
        </p>
        <p className='lg:text-3xl lg:mt-12 text-base mt-6'>
          Как оформить заказ
        </p>

        <p className='lg:text-2xl lg:mt-16 lg:text-left font-light mr-10 text-sm mt-4'>
          Для оформления заказа необходимо добавить выбранные товары в корзину, а затем перейти
          на страницу «Корзина». Проверьте правильность добавленных позиций и нажмите кнопку «Оформить заказ». 
           заполните все необходимые данные и ожидайте свой заказ.
           Привезём и отправим, как можно скорее.
        </p> 

        <p className='lg:text-3xl lg:mt-12 text-base mt-8'>
          Доставка
        </p>

        <p className='lg:text-3xl lg:mt-10 text-base mt-4'>
          Москва
        </p> 

        <p className='font-light lg:text-2xl lg:mt-10 text-xs mt-3'>
          <span className='lg:text-2xl text-sm font-normal'>Курьерская доставка по Москве:</span> 300р, при заказе от 3 000 р - БЕСПЛАТНО (1-2 дня)
        </p>
        <p className='font-light lg:text-2xl text-xs'>
          <span className='lg:text-2xl font-normal text-sm'>Самовывоз</span> - БЕСПЛАТНО
        </p>
        <p className='font-light lg:text-2xl lg:w-11/12 mr-2.5 text-xs'>
          После подтверждения сборки заказа (менеджер свяжется вами), Вы можете самостоятельно забрать заказ у метро Бабушкинская. Для Вашего удобства менеджер подойдёт прямо к метро и передаст Вам заказ. 
        </p>
        <p className='font-light lg:w-12/12 lg:text-2xl text-xs w-11/12'>
          <span className='lg:text-2xl font-normal text-sm'>До пункта выдачи СДЭК:</span> Стоимость: от 150р, при заказе от 3 000 р - БЕСПЛАТНО
        </p>

        <p className='lg:text-3xl lg:mt-16 text-base mt-8'>
          Москва и МО: (за пределами МКАД)
        </p>

        <p className='font-light lg:text-2xl lg:mt-10 text-xs mt-4'>
          <span className='lg:text-2xl font-normal text-sm'>Курьерская доставка по Московской Области:</span> 350р, при заказе от 3 000 р - БЕСПЛАТНО (1-2 дня)
        </p>

        <p className='font-light lg:text-2xl text-xs'>
          <span className='lg:text-2xl font-normal text-sm'>До отделения Почта России:</span>  Стоимость: 350р, при заказе от 4 000 р - БЕСПЛАТНО
        </p>

        <p className='lg:text-2xl lg:mt-16 text-base mt-8'>
          Другие города России:
        </p>

        <p className='font-light lg:text-2xl lg:mt-10 text-xs mt-4 '>
          <span className='lg:text-2xl font-normal text-sm'>До пункта выдачи СДЭК: Стоимость:</span> от 250р, при заказе от 3 000 р - БЕСПЛАТНО
        </p>

        <p className='font-light lg:text-2xl text-xs'>
          <span className='lg:text-2xl font-normal text-sm'>До отделения Почта России:</span> Стоимость: 350р, при заказе от 4 000 р - БЕСПЛАТНО
        </p>
    </div>
  );
}

export default Delivery;