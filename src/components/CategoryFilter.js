import React from 'react';
import categories from '../const/categories';

const CategoryFilter = () => (
  <select>
    <option key="All" value="All">All</option>
    {categories.map(category => (
      <option key={category} value={category}>
        {category}
      </option>
    ))}
  </select>
);

export default CategoryFilter;
