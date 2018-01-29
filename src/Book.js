import React from 'react';

const Book = ({ book, updateBook }) => (
  <div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={
          book.imageLinks && {
            backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
          }
        }
      />
      <div className="book-shelf-changer">
        <select
          value={book.shelf || 'none'}
          onChange={event => {
            updateBook({ id: book.id }, event.target.value);
          }}
        >
          <option disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{book.title}</div>
    {book.authors && (
      <div className="book-authors">{book.authors.join(' ')}</div>
    )}
  </div>
);

export default Book;
