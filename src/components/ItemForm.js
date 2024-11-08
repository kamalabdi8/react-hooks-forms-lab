import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState('Produce');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };

    onItemFormSubmit(newItem);  // Pass the new item to the parent

    // Reset form fields after submission
    setItemName('');
    setItemCategory('Produce');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
      </label>
      <label>
        Category:
        <select
          value={itemCategory}
          onChange={(e) => setItemCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>
      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
