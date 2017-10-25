import React from 'react'
import { Route } from 'react-router-dom';
import Library from './Library';
import SearchPage from './SearchPage';
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  handleBookshelfChange = (id, shelf) => {}

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(() => {
      this.setState((state) => {
        const updated = Object.assign({}, book, { shelf });
        return {
          books: state.books.filter(b => b.id !== book.id).concat([ updated ])
        };
      });
    });
  }

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route exact path='/search' render={() => (
          <SearchPage
            books={books}
            onUpdateBook={this.updateBook}
          />
        )}/>
        <Route exact path='/' render={() => (
          <Library
            books={books}
            onUpdateBook={this.updateBook}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp;