import React from 'react'

import '../styles/components/Carousel.scss'

const Carousel = ({ children }) => {

  return(
    <div className="CarouselBox">
      <h1>Past days</h1>
      <div className="Carousel">
        {children}
      </div>
    </div>
  )

}

export default Carousel
