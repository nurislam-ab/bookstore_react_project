import React from 'react';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

    this.state = {
      title: '',
      category: this.categories[0],
    };
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="title"
          placeholder="Enter book title"
        />

        <select name="category">
          {this.categories.map(category => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))}
        </select>
        <button type="submit">Save book</button>
      </form>
    );
  }
}

export default BooksForm;
