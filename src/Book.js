import React from 'react'
import { update } from './BooksAPI'

const Book = ({ book, page }) => (
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})` }}></div>
      <div className="book-shelf-changer">
        <select value={book.shelf || 'none'} onChange={(event) => {
          book.shelf = event.target.value
          update({ id: book.id }, event.target.value).then((response) => {
            if (page) {
              page.refresh()
            }
          })
        }}>
          <option disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{book.title}</div>
    <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
  </div>
)

export default Book
