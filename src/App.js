import React from 'react'
import { Route } from 'react-router-dom'
import ListOfBooks from './ListOfBooks'
import BookSearch from './BookSearch'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
      this.getAllBooks()
  }

  getAllBooks = () => {
    BooksAPI.getAll()
        .then((books) => this.setState({ books }))
        .catch((error) => console.log(error))
        
  }

  render() {
    return (
        <div className="app">
            <Route exact path="/" component={ListOfBooks} />
            <Route path="/search" component={BookSearch} />
        </div>
    )
  }
}

export default BooksApp
