import React from 'react'
import '../styles/components/Search.scss'

import Highlight from './Highlight'
import Nasa from '../lib/Nasa'

class Search extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      date: this.props.today,
      nasa: new Nasa(),
      api_today: {}
    }
  }

  //PASS A DATE AND GET API CONTENT
  get_api_content = async (on_this_date) => {
    const response = await this.state.nasa.makeCall(on_this_date)

    if(!response['error']){
      this.setState({ api_today: response })
    }
  }

  //HANDLE CHANGE OF DATE BUTTON
  handleChange = e => {
    this.get_api_content(e.target.value)
    this.setState({ date: e.target.value })
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
          handleElementClick={this.props.handleElementClick}
          content={this.state.api_today}/>

        <hr />
      </div>
    )
  }

}

export default Search
