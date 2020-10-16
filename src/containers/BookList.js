import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { changeFilter, removeBook } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({ books, removeBook, filter, changeFilter }) => {
  const handleRemoveBook = (book => removeBook(book));

  const handleFilterChange = category => changeFilter(category);

  return (
    <div>
      <div className="category-filter">
        <CategoryFilter onFilter={handleFilterChange} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {books
            .filter(book => (filter === 'All' ? true : book.category === filter))
            .map(book => (
              <Book
                book={book}
                key={book.bookId}
                removeBook={handleRemoveBook}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: bookToRemove => {
    dispatch(removeBook(bookToRemove));
  },
  changeFilter: filter => {
    dispatch(changeFilter(filter));
  },
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      bookId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
