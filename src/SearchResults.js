import React, { Component } from 'react'
import { search, getAll } from './BooksAPI'
import BookShelf from './BookShelf'

class SearchResults extends Component {

  state = {
    bookIdsInLibrary: [],
    results: []
  }

  componentDidMount() {
    getAll().then((books) => {
      this.setState({
        bookIdsInLibrary: books.map((b) => { return b.id })
      })
    })
  }

  componentWillReceiveProps(nextProps) {
    const { query } = nextProps
    if (query.length > 0) {
      search(query).then((r) => {
        if (r !== null && r.length > 0) {
          this.filterResults(r)
        } else {
          this.emptyResults()
        }
      })
    } else {
      this.emptyResults()
    }
  }

  emptyResults() {
    if (this.state.results.length > 0) {
      this.setState({
        results: []
      })
    }
  }

  filterResults(results) {
    this.setState({
      results: results.filter((b) => { return (!b.shelf || b.shelf === 'none') && !this.state.bookIdsInLibrary.includes(b.id)})
    })
  }

  refresh() {
    this.filterResults(this.state.results)
  }

  render() {
    return (
      <BookShelf books={this.state.results} title="Search Results" page={this} />
    )
  }
}

export default SearchResults
