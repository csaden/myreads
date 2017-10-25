import React from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';
import SHELVES from './constants/shelves';

const Library = ({books, onUpdateBook}) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {SHELVES.filter((s) => s.isShelf).map((s, i) => {
          return (
            <Bookshelf
              key={i}
              books={books.filter((b) => b.shelf === s.value)}
              name={s.name}
              onUpdateBook={onUpdateBook}
            />
          );
        })}
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default Library;