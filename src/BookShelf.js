import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {

  selectedShelfChanged(event) {
    console.log(event.target.value)
  }

  render() {
    const { books, title, page } = this.props
    return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.map(book => (
                <li key={book.id}>
                  <Book book={book} page={page}/>
                </li>
              ))}
            </ol>
          </div>
        </div>
    )
  }
}

export default BookShelf