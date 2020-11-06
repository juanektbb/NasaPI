import React from 'react'
import './styles/App.scss'
import 'regenerator-runtime/runtime'

import Header from './components/Header'
import Search from './components/Search'
import Gallery from './components/Gallery'

import Carousel from './components/Carousel'
import CarouselItem from './components/CarouselItem'

import { getPreviousDates } from './lib/helpers.js'
import Nasa from './lib/Nasa'

class App extends React.Component{

  state = {
    API_STRUCT: [],
    last_loaded: 2,
    nasa: new Nasa(),
    element_for_gallery: {},
    gallery_display: 'none',
    n_record_load: 10
  }

  componentDidMount(){
    this.load_records(10)
  }

  load_records = async (total) => {
    for(var i = this.state.last_loaded; i < this.state.last_loaded + total; i++){
      let query_date = getPreviousDates(i)
      let data_this_date = await this.state.nasa.makeCall(query_date)

      this.setState({
        API_STRUCT: [].concat(this.state.API_STRUCT, data_this_date)
      })
    }

    this.setState({ last_loaded: this.state.last_loaded + total + 1 })
  }

  handleElementClick = (element) => {
    this.setState({
      element_for_gallery: element,
      gallery_display: 'block'
    })
  }

  closeGallery = () => {
    this.setState({ gallery_display: 'none' })
  }

  render(){
    return(
      <div className="App">
        <Header />

        <Gallery
          display_type={this.state.gallery_display}
          content={this.state.element_for_gallery}
          closeGallery={this.closeGallery} />

        <Search 
          today={getPreviousDates(1)}
          handleElementClick={this.handleElementClick} />

        <Carousel>
          {this.state.API_STRUCT.map((item, i) =>
            <CarouselItem key={i} element={item} handleElementClick={this.handleElementClick} />
          )}
        </Carousel>

        <div className="fancy-button-box">
          <button className="fancy-button" onClick={() => this.load_records(this.state.n_record_load)}>Load more...</button>
        </div>

        <footer>
          &copy; NasAPI 2020
        </footer>
      </div>
    )
  }

}

export default App
