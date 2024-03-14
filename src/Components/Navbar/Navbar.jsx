import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { CiSearch } from "react-icons/ci";


function Navbar() {
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`} >
      <CiSearch className='searchIcon' style={{ fontSize: '2rem', color: 'white' }} />
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
        <div className='navText' >
          <p className='navTxt' >Home</p>
          <p className='navTxt' >Series</p>
          <p className='navTxt' >History</p>
          <p className='navTxt' >Liked</p>
          <p className='navTxt' >My List</p>
        </div>
        <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
    </div>
  )
}

export default Navbar