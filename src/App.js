import React from 'react'
import { Route } from 'react-router-dom'
import ListOfBooks from './ListOfBooks'
import BookSearch from './BookSearch'
import * as BooksAPI from './BooksAPI'
import _ from 'lodash'
import './App.css'

class BooksApp extends React.Component {
    state = {
        books: [],
        searchedBooks: []
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

    searchBooks = (query) => {
        this.search(query)
    }

    clearSearch = () => {
        this.setState({ searchedBooks: [] })
    }

    search = _.debounce(query => {
        BooksAPI.search(query)
            .then((result) => {
                const searchedBooks =  _.isArray(result) ? result : []
                this.setState({ searchedBooks })
            })
            .catch((error) => alert(error))
    }, 1000)

    render() {
        const searchedBooks = this.state.searchedBooks.map(book => {
            const b = _.find(this.state.books, { 'id' : book.id })
            return b ? b : book
        })

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
                        searchedBooks={searchedBooks}
                        clearSearch={this.clearSearch}
                        searchBooks={this.searchBooks}
                        updateBook={this.updateBook}
                    />
                    )} />
            </div>
        )
    }
}

export default BooksApp
