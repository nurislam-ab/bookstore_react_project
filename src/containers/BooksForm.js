import React from 'react';
import PropTypes from 'prop-types';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

    this.state = {
      title: '',
      category: this.categories[0],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(name, value);
  }

  render() {
    return (
      <form onChange={this.handleChange}>
        <input
          type="text"
          name="title"
          placeholder="Enter book title"
          onChange={this.handleChange}
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
