import React, { useState } from 'react';
import { useAction } from 'wasp/client/operations';
import { createItem } from 'wasp/client/operations';

const AddItemPage = () => {
  const createItemAction = useAction(createItem);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const itemData = {
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      price: parseFloat(formData.get('price') as string),
      isAvailable: formData.get('isAvailable') === 'true',
    };

    try {
      const item = await createItemAction(itemData);
      alert(`Item "${item.name}" added successfully!`);
    } catch (error) {
      alert('Failed to add item: ' + (error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Item Name" required />
      <textarea name="description" placeholder="Description" required />
      <input type="number" name="price" placeholder="Price" step="0.01" required />
      <label>
        <input type="checkbox" name="isAvailable" defaultChecked /> Is Available
      </label>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Adding...' : 'Add Item'}
      </button>
    </form>
  );
};

export default AddItemPage;