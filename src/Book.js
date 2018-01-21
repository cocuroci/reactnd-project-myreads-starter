import React from 'react'
import * as Shelves from './Shelves'

const Book = ({ book }) => (
    <div className="book">
        <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
            <div className="book-shelf-changer">
                <select>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading" selected={book.shelf === Shelves.CURRENTLY_READING}>Currently Reading</option>
                    <option value="wantToRead" selected={book.shelf === Shelves.WANT_TO_READ}>Want to Read</option>
                    <option value="read" selected={book.shelf === Shelves.READ}>Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.join('\n')}</div>
    </div>
)

export default Book