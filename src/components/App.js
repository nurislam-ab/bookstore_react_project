import React from 'react';
import '../assets/css/App.css';
import BookList from '../containers/BookList';
import BookForm from '../containers/BooksForm';
import Header from './Header';

const App = () => (
  <div className="App">
    <Header />
    <main>
      <BookList />
      <BookForm />
    </main>
  </div>
);

export default App;
