import React from 'react'
import '../styles/components/Highlight.scss'

import { convertDate } from '../lib/helpers.js'

const Highlight = (props) => {
  return (
    <div className='HighlightBox'>
      <h1>{convertDate(props.content.date)}</h1>

      <div className={"Highlight " + (props.content.media_type == 'video' ? 'with_video' : '')}>

        <a href="#" onClick={() => props.handleElementClick(props.content)}>
          {props.content.media_type == 'image' && <img src={props.content.url} className='' />}
          {props.content.media_type == 'video' && <iframe width="100%" height="320" src={props.content.url} frameBorder="0"></iframe>}
        </a>

        <div className="date">{convertDate(props.content.date)}</div>
      </div>
    </div>
  )
}

export default Highlight
