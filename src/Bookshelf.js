import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class Bookshelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }

  render() {
    const { books, name, onUpdateBook } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => {
              return (
                <Book
                  key={book.id}
                  book={book}
                  onUpdateBook={onUpdateBook}
                />
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default Bookshelf;