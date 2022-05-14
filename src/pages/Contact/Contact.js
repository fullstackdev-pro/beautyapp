import React from 'react';

function Contact(props) {
  return (
    <div className='mb-20 mx-2'>
      <div className='lg:mt-10 mt-4' style={{border: "0.5px solid #C8C8C8"}}></div>
      
      <p className='lg:text-4xl lg:text-center lg:mt-12 text-left text-base mt-4'>
        Контакты
      </p>

      <p className='lg:text-2xl lg:mt-16 mt-4 text-xs'>
        Интернет-магазин:
      </p>

      <p className='lg:mt-8 mt-4 lg:text-2xl text-xs font-extralight'>
        Телефон +7 903 875-01-01 (WhatsApp)
      </p>

      <p className='lg:mt-8 mt-4 lg:text-2xl text-xs font-extralight'>
        По всем вопросам о сотрудничестве: <br />
        <span className='font-light'>beauty.up.shop@yandex.ru</span>
      </p>

      <p className='lg:mt-8 mt-4 lg:text-2xl text-xs font-light'>
        Онлайн-помощь с 8:00-23:00
      </p>

      <p className='lg:mt-8 mt-4 lg:text-2xl lg:mr-0 text-xs font-extralight mr-20'>
        В наших соц. сетях мы с удовольствием поможем подобрать продукты, ответим на все вопросы <br />
        и примем заказ.
      </p>

      <p className='lg:mt-32 lg:text-2xl mt-12 text-base'>
        Реквизиты
      </p>

      <p className='lg:mt-12 lg:text-2xl mt-4 font-li text-xs'>
        ИП Горбачева Анна Алексеевна <br />
        ИНН <span className='font-extralight'>771549577427</span> <br />
        ОГРНИП <span className='font-extralight'>320774600478974</span> <br />
        Тел: +7 903 875-01-01 <br />
        email: beauty.up.shop@yandex.ru
      </p>
    </div>
  );
}

export default Contact;