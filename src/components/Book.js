import React from 'react';
import PropTypes from 'prop-types';
import '../Book.scss';
import '../progressBar.scss';

const Book = ({ book, removeBook }) => {
  const percentage = () => Math.ceil(Math.random() * 100);
  const percentageIndicator = percentage();
  const progressClassName = `p${percentageIndicator}`;

  return (
    <div className="book-preview-card">
      <div className="book-preview-info">
        <span className="book-category">{book.category}</span>
        <h2 className="book-title">{book.title}</h2>
        <a href="https://polar-citadel-29411.herokuapp.com/" className="book-author">Suzanne Collins</a>
        <div className="book-preview-btns">
          <div className="btn-wrapper">
            <button type="button">Comments</button>
          </div>
          <div className="btn-wrapper">
            <button
              type="button"
              onClick={() => removeBook(book)}
            >
              Remove Book
            </button>
          </div>
          <div className="btn-wrapper">
            <button type="button">Edit</button>
          </div>
        </div>
      </div>

      <div className="reading-progress">
        <div id="c100" className={progressClassName}>
          <div className="slice">
            <div className="bar" />
            <div className="fill" />
          </div>
        </div>
        <div className="progress-info">
          <span className="progress-percent">
            {percentageIndicator}
            %
          </span>
          <span className="progress-text">Completed</span>
        </div>
      </div>

      <div className="reading-data">
        <span className="chapter-label">Current chapter</span>
        <strong className="chapter">Chapter 17</strong>
        <button type="button" className="update-progress-btn">Update progress</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    bookId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
