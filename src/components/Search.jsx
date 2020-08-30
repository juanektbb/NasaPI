import React from 'react'
import Highlight from './Highlight'

import Gallery from './Gallery'

import '../styles/components/Search.scss'

class Search extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      date: this.props.today,
      api_today: {},
      gallery_view: 'none'
    }
  }

  //PASS A DATE AND GET API CONTENT
  get_api_content = (on_this_date) => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=vhfbkYMTzBe0txwiTUatg1aMeEQVfvCsS4ECps1h&date=" + on_this_date)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({ api_today: result })
        },
        (error) => {
          this.setState({ api_today: {} })
        })
  }

  //HANDLE CHANGE OF DATE BUTTON
  handleChange = e => {
    this.get_api_content(e.target.value)
    this.setState({ date: e.target.value })
  }

  //HANDLE OPEN GALLERY
  handleClick = e => {
    this.setState({ gallery_view: 'block' })
  }

  //COMPONENT WAS LOADED AND RENDERED, FILL IT UP NOW
  componentDidMount(){
    this.get_api_content(this.props.today)
  }

  render(){
    return(
      <div className="SearchBox">
        <div className='Search'>
          <form>
            <input type='date' name='date' onChange={this.handleChange} value={this.state.date}/>
          </form>
        </div>

        <Highlight
          passwork={this.handleClick}
          copyright={this.state.api_today.copyright}
          date={this.state.api_today.date}
          explanation={this.state.api_today.explanation}
          media_type={this.state.api_today.media_type}
          service_version={this.state.api_today.service_version}
          title={this.state.api_today.title}
          url={this.state.api_today.url}
        />

        <Gallery
          display_type={this.state.gallery_view}
          copyright={this.state.api_today.copyright}
          date={this.state.api_today.date}
          explanation={this.state.api_today.explanation}
          media_type={this.state.api_today.media_type}
          service_version={this.state.api_today.service_version}
          title={this.state.api_today.title}
          url={this.state.api_today.url}
        />

        <hr />
      </div>
    )
  }

}

export default Search
