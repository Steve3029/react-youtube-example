import React, { Component } from 'react'
import './style.css'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }

    onChange (term) {
      this.setState({term})
      this.props.onSearchTermChange(term)
    }

    render() {
      return (
        <div className="search-bar">
          <input value={ this.state.term } onChange={ evt => { this.onChange(evt.target.value) } } />
        </div>
      )
    }
}

export default SearchBar