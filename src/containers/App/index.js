import React, { Component } from 'react'
import YTSearch from 'youtube-api-search'
import SearchBar from '../SearchBar'
import VideoItemList from '../../components/VideoItemList'
import VideoDetail from '../../components/VideoDetail'

// If you don't have api key, going to http://console.developers.google.com
const API_KEY = 'AIzaSyDO3RA5fGGI-781qhBqtW4xeq8Sy0AM8GQ'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('urban dance')
  }

  videoSearch (term) {
    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({ 
        videos:videos,
        selectedVideo: videos[0]
      })
    })
  }

  render () {
    return (
      <div className="container">
        <SearchBar onSearchTermChange={term => {this.videoSearch(term)}} />
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