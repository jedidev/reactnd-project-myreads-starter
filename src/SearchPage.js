import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchResults from './SearchResults'

class SearchPage extends Component {

  state = {
    query: ""
  }

  searchTextChanged(event) {
    this.setState({
      query: event.target.value
    })
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" value={this.state.query} placeholder="Search by title or author" onChange={(event) => this.searchTextChanged(event)}/>
          </div>
        </div>
        <div className="search-books-results">
          <SearchResults query={this.state.query}/>
        </div>
      </div>
    )
  }
}

export default SearchPage
