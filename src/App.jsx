import React, { useState, useEffect } from 'react'
import 'regenerator-runtime/runtime'

import Header from './components/Header'
import Search from './components/Search'

import Carousel from './components/Carousel'
import CarouselItem from './components/CarouselItem'

import { getPreviousDates } from './helpers.js'

import './styles/App.scss'

//Import custom hook
// import useInitialState from './useInitialState';

class App extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      API: 'https://api.nasa.gov/planetary/apod?api_key=vhfbkYMTzBe0txwiTUatg1aMeEQVfvCsS4ECps1h',
      API_STRUCT: [],
      last_int: 2
    }
  }

  componentDidMount(){
    this.load_records(10)
  }

  load_more_images = () => {
    this.load_records(5)
  }

  load_API_STRUCT = async (this_link) => {
   const response = await fetch(this_link)
   const data = await response.json()
   return data
  }

  load_records = async (total) => {
    for(var i = this.state.last_int; i < this.state.last_int + total; i++){
      let query_date = '&date=' + getPreviousDates(i)
      let data_this_date = await this.load_API_STRUCT(this.state.API + query_date)

      this.setState({
        API_STRUCT: [].concat(this.state.API_STRUCT, data_this_date)
      })
    }

    this.setState({ last_int: this.state.last_int + total + 1 })
  }

  render(){
    return(
    <div className="App">
      <Header />
      <Search today={getPreviousDates(1)}/>
        <Carousel>
          {this.state.API_STRUCT.map((item, i) =>
            <CarouselItem key={i} {...item} /> //Unstructure the code
          )}
        </Carousel>
      <div className="fancy-button-box">
        <button className="fancy-button" onClick={this.load_more_images}>Load more...</button>
      </div>
      <footer>
        &copy; NasAPI 2020
      </footer>
    </div>)
  }

}

export default App
