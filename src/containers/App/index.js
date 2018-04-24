import React, { Component } from 'react'
import YTSearch from 'youtube-api-search'
import SearchBar from '../SearchBar'
import VideoItemList from '../../components/VideoItemList'
import VideoDetail from '../../components/VideoDetail'

// If you don't have api key, going to http://console.developers.google.com
const API_KEY = ''

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    }

    YTSearch({key: API_KEY, term: 'urban dance'}, videos => {
      this.setState({ 
        videos:videos,
        selectedVideo: videos[0]
      })
    })
  }

  render () {
    return (
      <div className="container">
        <SearchBar />
        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoItemList 
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={ this.state.videos } />
        </div>
      </div>
    )
  }
}

export default App