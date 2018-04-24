import React, { Component } from 'react'
import './style.css'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }

    onChange (e) {
      this.setState({
          term: e.target.value
      })
    }

    render() {
      return (
        <div className="search-bar">
          <input value={ this.state.term } onChange={ evt => { this.onChange(evt) } } />
        </div>
      )
    }
}

export default SearchBar