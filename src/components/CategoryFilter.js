import React from 'react';
import PropTypes from 'prop-types';
import '../assets/scss/CategoryFilter.scss';
import categoriesList from '../const/categories';

const CategoryFilter = ({ onFilter }) => {
  const categories = categoriesList;

  const handleFilter = ({ target }) => {
    onFilter(target.value);
  };

  return (
    <select name="category" onChange={handleFilter}>
      <option key="All" value="All">All</option>
      {categories.map(category => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

CategoryFilter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
