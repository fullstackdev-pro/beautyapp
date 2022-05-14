import React from 'react';

function AboutUs(props) {
  return (
    <>
      <div className='mt-10 ' style={{border: "0.5px solid #C8C8C8"}}></div>
      <div className='w-10/12 m-auto text-left'>

        <p className='lg:mt-8 lg:text-center lg:text-3xl mt-2 text-base'>
          О компании
        </p>

        <p className='lg:text-xl lg:mt-16 font-light text-xs mt-6'>
          <span className='lg:text-xl text-sm font-normal'>Beauty UP!</span> - современный магазин азиатской и российской косметики.
        </p>

        <p className='lg:text-xl mt-8 font-light text-xs'>
          У нас Вы можете подобрать косметику и собрать полноценный уход для себя и своей кожи. <br /> 
          Также мы состаляем бьюти-боксы - готовые наборы с косметикой, которые могут стать решением <br /> по уходу для себя или подарком для  близких.  Вы можете собрать как свой подарочный набор, <br /> так и приобрести готовый от нашего магазина. <br />
          Мы приветствуем обратную связь с клиентом и готовы помочь в любом вопросе. <br />
          У нас Вы можете получить бесплатную консультацию по уходу и воспользоваться быстрой доставкой! 
        </p>

        <p className='lg:text-xl lg:mt-10 font-normal mt-4 text-xs'>
          С любовью, команда Beauty UP!
        </p>

        <p className='lg:text-3xl font-normal lg:mt-32 text-xs mt-24' id='privacyPolicy' >
          Политика конфидециальности
        </p>

        <button className='mt-4 lg:border-4 lg:px-20 lg:py-1.5 rounded-3xl text-xs px-8 border-2' style={{border: "solid #F6D3E4"}}>
          Скачать
        </button>
      </div>
    </>
  );
}

export default AboutUs;