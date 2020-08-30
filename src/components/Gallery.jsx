import React from 'react'

import '../styles/components/Gallery.scss'

class Gallery extends React.Component{

  //Close the window
  handleClick = e => {
    if(e.target.id == 'CloseWindow'){
      if(this.state.display_type != 'none')
        this.setState({ display_type: 'none' })
      return true
    }
  }

  constructor(props){
    super(props)
    this.state = { display_type: this.props.display_type }
  }

  componentDidUpdate(prevProps, prevState){
    //NEW PROPS COME WITH DISPLAY:BLOCK, SO SHOW IT UP
    if(this.props.display_type != prevState.display_type){
      this.setState({ display_type: this.props.display_type })
    }
  }

  render(){
    return(
      <div className='GalleryBox' style={{display: this.state.display_type}} onClick={this.handleClick} id='GalleryBox'>
        <div className='Gallery'>
          {this.props.media_type == 'image' && <img src={this.props.url} className='' />}
          {this.props.media_type == 'video' && <iframe width="100%" height="320" src={this.props.url} frameBorder="0"></iframe>}

          <div className="caption">
            {this.props.copyright}
          </div>

          <div className='explanation'>
            {this.props.explanation}
          </div>

          <div className="close-x" id="CloseWindow">&#10005;</div>
        </div>
      </div>
    )
  }

}

export default Gallery
