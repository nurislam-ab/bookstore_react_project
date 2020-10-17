import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';
import categoriesList from '../const/categories';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.categories = categoriesList;

    this.state = {
      title: '',
      category: this.categories[0],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    const event = e;
    event.preventDefault();
    const { createBook } = this.props;

    createBook(this.state);
    this.setState({ title: '', category: '' });
    event.target.title.value = '';
    event.target.category.value = '';
  }

  render() {
    return (
      <section className="container book-form-container">
        <div className="content">
          <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
            <input
              type="text"
              name="title"
              placeholder="Enter book title"
              onChange={this.handleChange}
              required
            />

            <select name="category" required>
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
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createBook: newBook => {
    dispatch(createBook(newBook));
  },
});

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
