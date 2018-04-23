import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: '123asd'
        }
    }

    onChange (e) {
      this.setState({
          term: e.target.value
      })
    }

    render() {
      return <input value={ this.state.term } onChange={ evt => { this.onChange(evt) } } />
    }
}

export default SearchBar