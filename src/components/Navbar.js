import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Bookcase
            <i class='fas fa-book' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Головна
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/possibilities'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Можливості
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/location'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Де ми?
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Реєстрація
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Реєстрація</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
