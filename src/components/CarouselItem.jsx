import React from 'react'

import PropTypes from 'prop-types'

import '../styles/components/Carousel.scss'

import { convertDate } from '../helpers.js'

const CarouselItem = ({ copyright, date, explanation, media_type, service_version, title, url }) => {

  return(
    <div className={"CarouselItem " + (media_type == 'video' ? 'with_video' : '')} >

      {media_type == 'image' && <img src={url} className='' />}
      {media_type == 'video' && <iframe width="100%" height="320" src={url} frameBorder="0"></iframe>}

      <div className="date">{convertDate(date)}</div>
    </div>
  )

}

//Validate the props
CarouselItem.propTypes = {
  copyright: PropTypes.string,
  date: PropTypes.string,
  explanation: PropTypes.string,
  media_type: PropTypes.string,
  service_version: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string
}

export default CarouselItem
