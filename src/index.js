import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './assets/css/reset.css';
import './assets/scss/index.scss';
import App from './components/App';
import rootReducer from './reducers/index';
import categoriesList from './const/categories';

const bookTitles = [
  'One by One',
  'Hyperbole and a Half: Unfortunate Situations, Flawed Coping Mechanisms, Mayhem, and Other Things That Happened',
  'Solutions and Other Problems',
  'The Midnight Library: A Novel',
  'The Girl with the Louding Voice',
  'Pretty Things',
  'Hidden Valley Road: Inside the Mind of an American Family',
];

const categories = categoriesList;

const categoryRandom = () => Math.floor(Math.random() * categories.length);

const books = [];

for (let i = 0; i < bookTitles.length; i += 1) {
  books[i] = {
    bookId: i,
    title: bookTitles[i],
    category: categories[categoryRandom()],
  };
}

const initialState = {
  books,
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
