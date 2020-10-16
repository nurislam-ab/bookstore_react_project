import React from 'react';
import '../App.css';
import BookList from '../containers/BookList';
import BookForm from '../containers/BooksForm';

const App = () => (
  <div className="App">
    <BookList />
    <BookForm />
  </div>
);

export default App;
