import React from 'react'
import SearchPage from './SearchPage'
import ListPage from './ListPage'
import { Route, Switch } from 'react-router-dom'
import NoMatch from './NoMatch'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={ListPage}/>
          <Route exact path="/search" component={SearchPage}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
