import React from 'react';
import { connect } from 'react-redux';

const BooksList = ({ books }) => (
  <table>
    <thead>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>bookId</td>
        <td>title</td>
        <td>category</td>
      </tr>
    </tbody>
  </table>
);

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps, null)(BooksList);
