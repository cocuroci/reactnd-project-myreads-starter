import React from 'react'
import Book from './Book'

const Bookshelf = ({ shelf, updateBook }) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.title}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {shelf.books.map((book, index) => (
                    <li key={index}>
                        <Book book={book} updateBook={updateBook} /> 
                    </li>
                ))}
            </ol>
        </div>
    </div>
)

export default Bookshelf