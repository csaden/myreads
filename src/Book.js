import React from 'react';
import SHELVES from './constants/shelves';

const Book = ({book, onUpdateBook}) => {
  const bookImage = book.imageLinks &&
    (book.imageLinks.smallThumbnail || book.imageLinks.thumbnail);
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{width: 128, height: 192,backgroundImage: `url(${bookImage})` }}></div>
          <div className="book-shelf-changer">
            <select
              onChange={(event) => onUpdateBook(book, event.target.value)}
              value={book.shelf}>
              {SHELVES.map((s) => {
                return (
                  <option
                    key={`${book.id}-${book.title}-${s.name}`}
                    disabled={s.disabled}
                    value={s.value}>
                    {s.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{(book.authors || []).join(', ')}</div>
      </div>
    </li>
  );
}

export default Book;