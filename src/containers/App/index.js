import React, { Component } from 'react'
import YTSearch from 'youtube-api-search'
import SearchBar from '../SearchBar'

const API_KEY = 'AIzaSyDO3RA5fGGI-781qhBqtW4xeq8Sy0AM8GQ'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: []
    }

    YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
      this.setState({ videos })
    })
  }

  render () {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}

export default App