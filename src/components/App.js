import React from 'react';
import '../App.css';
import BookList from '../containers/BookList';
import BookForm from '../containers/BooksForm';
import Header from './Header';

const App = () => (
  <div className="App">
    <Header />
    <BookList />
    <BookForm />
  </div>
);

export default App;
