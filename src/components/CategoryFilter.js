import React from 'react';
import categories from '../const/categories';

const CategoryFilter = () => (
  <select>
    {categories.map(category => (
      <option key={category} value={category}>
        {category}
      </option>
    ))}
  </select>
);

export default CategoryFilter;
