import React from 'react'

import '../styles/components/Header.scss'
import logo from '../static/nasa.png'

const Header = () => {
  return(
    <header>
      <div className='logo'>
        <img src={logo} alt="Nasa logo"/>
      </div>
      <div className='fancy-text'>
        Discover <span>Nasa</span>'s top photographs
      </div>
    </header>
  )
}

export default Header
