import React from 'react'
import SearchPage from './SearchPage'
import ListPage from './ListPage'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" component={ListPage}/>
        <Route exact path="/search" component={SearchPage}/>
      </div>
    )
  }
}

export default BooksApp
