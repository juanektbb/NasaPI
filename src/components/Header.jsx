import React from 'react'

import '../styles/components/Header.scss'
import logo from '../static/nasa.png'

const Header = () => {

  return(
    <header className=''>
      <div className='logo'>
        <img src={logo} />
      </div>
      <div className='fancy-text'>
        Discover <span>Nasa</span>'s top photographs
      </div>
    </header>
  )

}

export default Header
