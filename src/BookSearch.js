import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class BookSearch extends Component {
    state = {
        query: '',
        books: []
    }

    updateQuery = (query) => {
        this.setState({ query })
        this.search(query)
    }

    search = _.debounce(query => {
        BooksAPI.search(query)
            .then((result) => {
                const books =  _.isArray(result) ? result : []
                this.setState({ books })
            })
            .catch((error) => alert(error))
    }, 1000)

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            onChange={(event) => this.updateQuery(event.target.value)}
                            value={this.state.query}
                            type="text"  
                            placeholder="Search by title or author"
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.map((book, index) => (
                            <li key={index}>
                                <Book
                                    book={book}
                                    updateBook={this.props.updateBook}
                                /> 
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookSearch