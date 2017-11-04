import React, { Component } from 'react'
import { search } from './BooksAPI'
import BookShelf from './BookShelf'

class SearchResults extends Component {

  state = {
    results: [],
    filtered: []
  }

  componentWillReceiveProps(nextProps) {
    const { query } = nextProps
    if (query.length > 0) {
      search(query).then((r) => {
        this.filterResults(r)
      })
    } 
  }

  filterResults(results) {
    this.setState({
      results: results,
      filtered: results.filter((b) => { return !b.shelf || b.shelf === 'none' })
    })
  }

  refresh() {
    this.filterResults(this.state.results)
  }

  render() {
    return (
      <BookShelf books={this.state.filtered} title="Search Results" page={this} />
    )
  }
}

export default SearchResults
