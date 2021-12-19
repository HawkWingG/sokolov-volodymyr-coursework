import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Приєднюйтеся до нас!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpeg'
              text='Відкрийте для себе неймовірний світ знань та пригод з асортиментом у понад 7000+ книг'
              label='Література'
              path='/possibilities'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Знайдіть людей які розділяють ваші погляди'
              label='Спілкування'
              path='/possibilities'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Пізнавайте з комфортом'
              label='Комфорт'
              path='/possibilities'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Зустріньтеся з сучасними літераторами'
              label='Відомі діячі'
              path='/possibilities'
            />
            <CardItem
              src='images/img-5.jpeg'
              text='Публікуйте свої авторські роботи'
              label='Публікації'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
