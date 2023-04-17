import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import PianoIcon from '@mui/icons-material/Piano';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Navbar.css'

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, showButton] = useState(false);

    return (
        <>
          <nav className='navbar'>
              <Link to='/' className='navbar-logo'>
                <PianoIcon fontSize='inherit' /> MELODY PIANO STUDIO 
              </Link>
              <ul className='nav-menu'>
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
          </nav>

        </>
  )
}

export default Navbar
