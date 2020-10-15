import React from 'react';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <form>
      <input type="text" name="book-title" placeholder="Enter book title" />
      <select>
        {categories.map(category => (
          <option key={category}>{category}</option>
        ))}
      </select>
      <button type="submit">Save book</button>
    </form>
  );
};

export default BooksForm;
