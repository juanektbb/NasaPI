import React from 'react'
import '../styles/components/Search.scss'

import Highlight from './Highlight'
import Nasa from '../lib/Nasa'

class Search extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      date: this.props.today,
      loading: true,
      error: false,
      nasa: new Nasa(),
      api_today: {}
    }
  }

  //PASS A DATE AND GET API CONTENT
  get_api_content = async (on_this_date) => {
    const response = await this.state.nasa.makeCall(on_this_date)

    if (!response['error'] && response['code'] != 400) {
      this.setState({
        loading: false,
        api_today: response
      })
    } else {
      this.setState({
        error: true
      })
    }
  }

  //HANDLE CHANGE OF DATE BUTTON
  handleChange = e => {
    this.setState({
      error: false,
      loading: true,
      date: e.target.value
    })
    this.get_api_content(e.target.value)

  }

  //COMPONENT WAS LOADED AND RENDERED, FILL IT UP NOW
  componentDidMount() {
    this.get_api_content(this.props.today)
  }

  render() {
    return (
      <div className="SearchBox">
        <div className='Search'>
          <input type='date' name='date' onChange={this.handleChange} value={this.state.date} />
        </div>

        {this.state.loading || this.state.error ?
          <div className="Loading">
            {this.state.error ? "Unable to load data, try another day" : "Loading..."}
          </div>
          :
          <Highlight
            handleElementClick={this.props.handleElementClick}
            content={this.state.api_today}
          />}

        <hr />
      </div>
    )
  }

}

export default Search
