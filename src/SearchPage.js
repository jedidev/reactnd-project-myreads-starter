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
            <input type="text" placeholder="Search by title or author" onChange={this.searchTextChanged.bind(this)}/>
          </div>
        </div>
        <div className="search-books-results">
          <SearchResults query={this.state.query}/>
        </div>
      </div>
  )}
}

export default SearchPage
