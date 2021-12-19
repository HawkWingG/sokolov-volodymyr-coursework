import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Отримуйте сповіщення щодо нових публікацій та активностей 
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Ваш Email'
            />
            <Button buttonStyle='btn--outline'>Підписатися</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Про нас</h2>
            <Link to='/'>Відгуки</Link>
            <Link to='/'>Кар'єра</Link>
            <Link to='/'>Наукова діяльність</Link>
            <Link to='/location'>Знайти нас</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Зв'яжіться з нами</h2>
            <Link to='/'>Контакти</Link>
            <Link to='/'>Допомога</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Публікації</h2>
            <Link to='/'>Авторські роботи</Link>
            <Link to='/'>Агенція</Link>
            <Link to='/'>Літератори</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Соціальні мережі</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Bookcase
              <i class='fas fa-book' />
            </Link>
          </div>
          <small class='website-rights'>Bookcase © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
