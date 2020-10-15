import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

const bookIds = () => Math.ceil(Math.random() * 100);

const bookTitles = [
  'One by One',
  'Hyperbole and a Half: Unfortunate Situations, Flawed Coping Mechanisms, Mayhem, and Other Things That Happened',
  'Solutions and Other Problems',
  'The Midnight Library: A Novel',
  'The Girl with the Louding Voice',
  'Pretty Things',
  'Hidden Valley Road: Inside the Mind of an American Family',
];

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const categoryRandom = () => Math.floor(Math.random() * categories.length);

const books = [];

for (let i = 0; i < bookTitles.length; i += 1) {
  books[i] = {
    bookId: bookIds(),
    title: bookTitles[i],
    category: categories[categoryRandom()],
  };
}

const initialState = {
  books,
};

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
