import React from 'react'
import '../styles/components/Gallery.scss'

const Gallery = (props) => {
  return(
    <div className='GalleryBox' style={{display: props.display_type}} id='GalleryBox'>
      <div className='Gallery'>
        {props.content.media_type == 'image' && <img src={props.content.url} className='' />}
        {props.content.media_type == 'video' && <iframe width="100%" height="320" src={props.content.url} frameBorder="0"></iframe>}

        <div className="caption">
          {props.content.copyright}
        </div>

        <div className='explanation'>
          {props.content.explanation}
        </div>

        <div className="close-x" id="CloseWindow" onClick={() => props.closeGallery()}>&#10005;</div>
      </div>
    </div>
  )
}

export default Gallery
