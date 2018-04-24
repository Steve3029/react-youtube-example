import React, { Component } from 'react'
import YTSearch from 'youtube-api-search'
import SearchBar from '../SearchBar'
import VideoItemList from '../../components/VideoItemList'

const API_KEY = ''

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: []
    }

    YTSearch({key: API_KEY, term: 'urban dance'}, videos => {
      this.setState({ videos })
    })
  }

  render () {
    return (
      <div>
        <SearchBar />
        <VideoItemList videos={ this.state.videos } />
      </div>
    )
  }
}

export default App