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

    updateBook = (book, shelf) => {
        BooksAPI.update(book, shelf)
            .then(() => this.getAllBooks())
            .catch((error) => console.log(error))
    }

  render() {
    return (
        <div className="app">
            <Route exact path="/" render={() => (
                <ListOfBooks 
                    books={this.state.books} 
                    updateBook={this.updateBook} 
                />
            )}  />
            <Route path="/search" render={() => (
                <BookSearch
                    updateBook={this.updateBook}
                />
             )} />
        </div>
    )
  }
}

export default BooksApp
