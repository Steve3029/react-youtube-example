import React, { Component } from 'react'
import YTSearch from 'youtube-api-search'
import SearchBar from '../SearchBar'
import VideoItemList from '../../components/VideoItemList'
import VideoDetail from '../../components/VideoDetail'

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
    console.log(this.state.videos)
    return (
      <div>
        <SearchBar />
        {' '}
        <VideoDetail video={this.state.videos[0]} />
        {' '}
        <VideoItemList videos={ this.state.videos } />
      </div>
    )
  }
}

export default App