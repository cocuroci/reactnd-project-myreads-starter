import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import _ from 'lodash';

class BookSearch extends Component {
  state = {
    query: '',
  };

  updateQuery = query => {
    this.setState({ query });
    this.props.searchBooks(query);
  };

  clearSearch = () => {
    this.props.clearSearch();
  };

  render() {
    const searchedBooks = _.orderBy(
      this.props.searchedBooks,
      ['title'],
      ['asc']
    );

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link onClick={this.clearSearch} to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              onChange={event => this.updateQuery(event.target.value)}
              value={this.state.query}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchedBooks.map((book, index) => (
              <li key={index}>
                <Book book={book} updateBook={this.props.updateBook} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookSearch;
