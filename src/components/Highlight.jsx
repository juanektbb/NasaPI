import React from 'react'

import { convertDate } from '../helpers.js'

import '../styles/components/Highlight.scss'


class Highlight extends React.Component{

  render(){
    return (
      <div className='HighlightBox'>
        <a href="#" onClick={this.props.passwork}>
          <div className="ClickableArea">
            <h1>{convertDate(this.props.date)}</h1>

            <div className={"Highlight " + (this.props.media_type == 'video' ? 'with_video' : '')}>

              {this.props.media_type == 'image' && <img src={this.props.url} className='' />}
              {this.props.media_type == 'video' && <iframe width="100%" height="320" src={this.props.url} frameBorder="0"></iframe>}

              <div className="date">{convertDate(this.props.date)}</div>
            </div>
          </div>
        </a>
      </div>
    )
  }
}

export default Highlight
