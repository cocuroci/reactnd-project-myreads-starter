import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class BookSearch extends Component {
    state = {
        query: '',
        books: []
    }

    updateQuery = (query) => {
        this.setState({ query })
        
        BooksAPI.search(query)
            .then((books) => this.setState({ books }))
            .catch((error) => alert(error))
    }

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
                                <Book book={book} /> 
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookSearch