import React from 'react'
import '../styles/components/Carousel.scss'

const Carousel = ({ children }) => {
  return(
    <div className="CarouselBox">
      <h1>More amazing pictures</h1>
      <div className="Carousel">
        {children}
      </div>
    </div>
  )
}

export default Carousel
