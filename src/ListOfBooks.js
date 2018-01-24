import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';
import * as Shelves from './Shelves';

class ListOfBooks extends Component {
  render() {
    const shelves = [
      {
        title: 'Currently Reading',
        books: this.props.books.filter(
          book => book.shelf === Shelves.CURRENTLY_READING
        ),
      },
      {
        title: 'Want to Read',
        books: this.props.books.filter(
          book => book.shelf === Shelves.WANT_TO_READ
        ),
      },
      {
        title: 'Read',
        books: this.props.books.filter(book => book.shelf === Shelves.READ),
      },
    ];
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map((shelf, index) => (
              <Bookshelf
                key={index}
                shelf={shelf}
                updateBook={this.props.updateBook}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default ListOfBooks;
