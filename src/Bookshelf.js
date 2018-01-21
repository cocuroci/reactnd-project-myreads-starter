import React from 'react'
import Book from './Book'

const Bookshelf = ({ shelf }) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.title}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {shelf.books.map((book, index) => (
                    <li key={index}>
                        <Book book={book} /> 
                    </li>
                ))}
            </ol>
        </div>
    </div>
)

export default Bookshelf