import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import PianoIcon from '@mui/icons-material/Piano';
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
                <PianoIcon fontSize='inherit' /> MELODY PIANO STUDIO 
              </Link>
              <div className="menu-icon" onClick={handleClick}>
                {click ? <CloseIcon /> : <MenuIcon />}
              </div>
              <ul className={click? 'nav-menu-active' : 'nav-menu'} onClick={closeMobileMenu}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links'>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about-us' className='nav-links'>
                        About
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/lessons' className='nav-links'>
                        Lessons
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact-us' className='nav-links'>
                        Contact
                    </Link>
                </li>
              </ul>
            </div>
          </nav>

        </>
  )

}

export default Navbar
