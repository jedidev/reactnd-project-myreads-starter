import React, { Component } from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'
import { getAll } from './BooksAPI'

class ListPage extends Component {

  state = {
    books: [],
  }

  componentDidMount() {
    getAll().then((books) => {
      this.updateShelves(books)
    })
  }

  updateShelves(books) {
    this.setState({
      books: books
    })
  }

  refresh() {
    this.updateShelves(this.state.books)
  }

  render() {
    const { books} = this.state
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf books={books.filter((b) => { return b.shelf === 'currentlyReading'})} title="Currently Reading" page={this}/>
            <BookShelf books={books.filter((b) => { return b.shelf === 'wantToRead'})} title="Want to Read" page={this}/>
            <BookShelf books={books.filter((b) => { return b.shelf === 'read'})} title="Read" page={this}/>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListPage
