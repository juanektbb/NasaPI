import React from 'react'
import '../styles/components/Carousel.scss'

import { convertDate } from '../lib/helpers.js'

const CarouselItem = (props) => {
  return(
    <div 
      className={"CarouselItem " + (props.element.media_type == 'video' ? 'with_video' : '')} 
      onClick={() => props.handleElementClick(props.element)} >

      {props.element.media_type == 'image' && <img src={props.element.url} className='' />}
      {props.element.media_type == 'video' && <iframe width="100%" height="320" src={props.element.url} frameBorder="0"></iframe>}

      <div className="date">{convertDate(props.element.date)}</div>
    </div>
  )
}

export default CarouselItem
