import React from 'react';

const BooksList = (() => {
  return (
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
  )
});

export default BooksList;