import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Navbar.css'

function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const checkMobileMenu = () => {
      if(window.innerWidth >= 910) {
        setClick(false)
      }
    };

    useEffect(() => {
      checkMobileMenu()
    }, [])
    window.addEventListener('resize', checkMobileMenu);
    
    return (
        <>
          <nav className='navbar'>
            <div className='navbar-container'>
              <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                <img src='/images/logo-no-bg.png' alt='logo' width='90px' height='90px' />
                Melody Piano Studio 
              </Link>
              <div className="menu-icon" onClick={handleClick}>
                {click ? <CloseIcon /> : <MenuIcon />}
              </div>
              <ul className={click? 'nav-menu-active' : 'nav-menu'} onClick={closeMobileMenu}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links'>
                        HOME
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about-us' className='nav-links'>
                        ABOUT
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/lessons' className='nav-links'>
                        LESSONS
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact-us' className='nav-links'>
                        CONTACT
                    </Link>
                </li>
              </ul>
            </div>
          </nav>

        </>
  )

}

export default Navbar
