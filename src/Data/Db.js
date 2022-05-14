import homeImage1 from './images/homeImages/Rectangle1.png'
import homeImage2 from './images/homeImages/Rectangle2.png'
import homeImage3 from './images/homeImages/Rectangle3.png'
import homeImage4 from './images/homeImages/Rectangle4.png'
import homeImage5 from './images/homeImages/Rectangle5.png'
import homeImage6 from './images/homeImages/Rectangle6.png'
import homeImage7 from './images/homeImages/Rectangle7.png'
import homeImage8 from './images/homeImages/Rectangle8.png'
import homeImage9 from './images/homeImages/Rectangle9.png'
import homeImage10 from './images/homeImages/Rectangle10.png'
import homeImage11 from './images/homeImages/Rectangle11.png'
import homeImage12 from './images/homeImages/Rectangle12.png'

import newGoods1 from './images/goods/Rectangle1.png'
import newGoods2 from './images/goods/Rectangle2.png'
import newGoods3 from './images/goods/Rectangle3.png'
import newGoods4 from './images/goods/Rectangle4.png'
import newGoods5 from './images/goods/Rectangle5.png'

import typeImage1 from './images/types/Rectangle1.png'
import typeImage2 from './images/types/Rectangle2.png'
import typeImage3 from './images/types/Rectangle3.png'
import typeImage4 from './images/types/Rectangle4.png'
import typeImage5 from './images/types/Rectangle5.png'
import typeMobile from './images/types/Rectangle 73.png'

import popularGoods1 from './images/popular/Rectangle1.png'
import popularGoods2 from './images/popular/Rectangle2.png'
import popularGoods3 from './images/popular/Rectangle3.png'
import popularGoods4 from './images/popular/Rectangle4.png'
import popularGoods5 from './images/popular/Rectangle5.png'

import partner1 from './images/partners/Rectangle1.png'
import partner2 from './images/partners/Rectangle2.png'
import partner3 from './images/partners/Rectangle3.png'
import partner4 from './images/partners/Rectangle4.png'
import partner5 from './images/partners/Rectangle5.png'
import partner6 from './images/partners/Rectangle6.png'

import instagram1 from './images/instagram/Rectangle1.png'
import instagram2 from './images/instagram/Rectangle2.png'
import instagram3 from './images/instagram/Rectangle3.png'

const data = [
  {
    id: 1,
    type: 'header',
    name: 'home',
    img: homeImage1,
    content: ''
  },
  {
    id: 2,
    type: 'header',
    name: 'Лицо',
    img: homeImage2,
    content: 'Самый любимый уход - это уход за лицом. Тканевые маски, сыворотки, крема, пилинги, маски - всё это ты найдёшь тут'
  },
  {
    id: 3,
    type: 'header',
    name: 'Тело',
    img: homeImage3,
    content: 'Настоящая забота о себе - это забота о своём теле. Для тебя мы тщательно отбирали продукты для ухода за телом, здесь ты найдёшь только лучшее!'
  },
  {
    id: 4,
    type: 'header',
    name: 'Волосы',
    img: homeImage4,
    content: 'Здесь мы собрали самые крутые средства для волос, которые помогут их сделать здоровыми, сильными и красивыми'
  },
  {
    id: 5,
    type: 'header',
    name: 'Новинки',
    img: homeImage5,
    content: 'Хочется чего-то новенького? У нас тут как раз новинки, скорее добавляй их в корзину, пока не закончились'
  },
  {
    id: 6,
    type: 'header',
    name: 'Подборки',
    img: homeImage6,
    content: ''
  },
  {
    id: 7,
    type: 'header',
    name: 'Наборы',
    img: homeImage7,
    content: 'Да что тут думать! Выбирай готовые наборы на любой вкус и бюджет!'
  },
  {
    id: 8,
    type: 'header',
    name: 'Жирная',
    img: homeImage8,
    content: 'Твоя кожа часто блестит, на ней появляются прыщики? Мы подобрали специальные продукты для жирной кожи'
  },
  {
    id: 0.9,
    type: 'header',
    name: 'Сухая',
    img: homeImage9,
    content: 'Кожа стянута, рано появляются мелкие морщинки? Твоя кожа требует увлажнения, выбирай продукты для сухой кожи'
  },
  {
    id: 9,
    type: 'header',
    name: 'Чувствительная',
    img: homeImage10,
    content: 'Часто появляются покраснения, иногда пощипывает? Твоя кожа требует деликатного ухода, выбирай продукты для чувствительной кожи'
  },
  {
    id: 0.10,
    type: 'header',
    name: 'Комби',
    img: homeImage11,
    content: 'Т-зона блестит, а остальное сухое и шелушиться? Выбирай для себя продукты из комби подборки'
  },
  {
    id: 10,
    type: 'header',
    name: 'Проблемная',
    img: homeImage12,
    content: 'Прыщики и постоянные воспаления? Спокойно, тут ты найдёшь всё для ухода за проблемной кожей'
  },

  {
    id: 11,
    category: 'new',
    type: 'goods',
    name: 'Название бренда',
    description: `Описаниe Описание Описание`,
    img: newGoods1
  },
  {
    id: 12,
    category: 'new',
    type: 'goods',
    name: 'Название бренда',
    description: 'Описание  Описание  Описание',
    img: newGoods2
  },
  {
    id: 13,
    category: 'new',
    type: 'goods',
    name: 'Название бренда',
    description: 'Описание  Описание  Описание',
    img: newGoods3
  },
  {
    id: 14,
    category: 'new',
    type: 'goods',
    name: 'Название бренда',
    description: 'Описание  Описание  Описание',
    img: newGoods4
  },
  {
    id: 15,
    category: 'new',
    type: 'goods',
    name: 'Название бренда',
    description: 'Описание  Описание  Описание',
    img: newGoods5
  },

  {
    id: 16,
    type: 'types',
    name: 'Жирная',
    img: typeImage1
  },
  {
    id: 17,
    type: 'types',
    name: 'Сухая',
    img: typeImage2
  },
  {
    id: 18,
    type: 'types',
    name: 'Чувствительная',
    img: typeImage3
  },
  {
    id: 19,
    type: 'types',
    name: 'Комби',
    img: typeImage4
  },
  {
    id: 20,
    type: 'types',
    name: 'Проблемная',
    img: typeImage5
  },
  {
    id: 20.1,
    type: 'Mobile',
    mobile: 'true',
    name: 'mobile',
    img: typeMobile
  },
  
  {
    id: 21,
    category: 'popular',
    type: 'goods',
    name: 'Название бренда',
    description: 'Описание  Описание  Описание',
    img: popularGoods1
  },
  {
    id: 22,
    category: 'popular',
    type: 'goods',
    name: 'Название бренда',
    description: 'Описание  Описание  Описание',
    img: popularGoods2
  },
  {
    id: 23,
    category: 'popular',
    type: 'goods',
    name: 'Название бренда',
    description: 'Описание  Описание  Описание',
    img: popularGoods3
  },
  {
    id: 24,
    category: 'popular',
    type: 'goods',
    name: 'Название бренда',
    description: 'Описание  Описание  Описание',
    img: popularGoods4
  },
  {
    id: 25,
    category: 'popular',
    type: 'goods',
    name: 'Название бренда',
    description: 'Описание  Описание  Описание',
    img: popularGoods5
  },
  
  {
    id: 26,
    category: 'partners',
    img: partner1
  },
  {
    id: 27,
    category: 'partners',
    img: partner2
  },
  {
    id: 28,
    category: 'partners',
    img: partner3
  },
  {
    id: 29,
    category: 'partners',
    img: partner4
  },
  {
    id: 30,
    category: 'partners',
    img: partner5
  },
  {
    id: 31,
    category: 'partners',
    img: partner6
  },

  {
    id: 32,
    category: 'instagram',
    img: instagram1
  },
  {
    id: 33,
    category: 'instagram',
    img: instagram2
  },
  {
    id: 34,
    category: 'instagram',
    img: instagram3
  },
  {
    id: 34,
    category: 'instagram',
    img: instagram1
  },
]

export default data