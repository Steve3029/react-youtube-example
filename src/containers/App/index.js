import React from 'react'
import YTSearch from 'youtube-api-search'

import SearchBar from '../../components/SearchBar'

const API_KEY = 'AIzaSyDO3RA5fGGI-781qhBqtW4xeq8Sy0AM8GQ'

YTSearch({key: API_KEY, term: 'surfboards'}, data => {
  console.log(data)
})

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
    )
}

export default App