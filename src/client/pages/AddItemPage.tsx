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
    // <form onSubmit={handleSubmit}>
    //   <input type="text" name="name" placeholder="Item Name" required />
    //   <textarea name="description" placeholder="Description" required />
    //   <input type="number" name="price" placeholder="Price" step="0.01" required />
    //   <label>
    //     <input type="checkbox" name="isAvailable" defaultChecked /> Is Available
    //   </label>
    //   <button type="submit" disabled={isLoading}>
    //     {isLoading ? 'Adding...' : 'Add Item'}
    //   </button>
    // </form>
    <form
  onSubmit={handleSubmit}
  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
>
  <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Add New Item</h2>

  <div className="mb-4">
    <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-400">
      Item Name
    </label>
    <input
      type="text"
      id="name"
      name="name"
      placeholder="Enter item name"
      required
      className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
    />
  </div>

  <div className="mb-4">
    <label htmlFor="description" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-400">
      Description
    </label>
    <textarea
      id="description"
      name="description"
      placeholder="Enter item description"
      required
      className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
    ></textarea>
  </div>

  <div className="mb-4">
    <label htmlFor="price" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-400">
      Price
    </label>
    <input
      type="number"
      id="price"
      name="price"
      placeholder="Enter price"
      step="0.01"
      required
      className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
    />
  </div>

  <div className="mb-4 flex items-center">
    <input
      type="checkbox"
      id="isAvailable"
      name="isAvailable"
      defaultChecked
      className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-gray-600 dark:focus:ring-primary-500"
    />
    <label htmlFor="isAvailable" className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-400">
      Is Available
    </label>
  </div>

  <button
    type="submit"
    disabled={isLoading}
    className={`w-full rounded-lg bg-green-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${
      isLoading ? "cursor-not-allowed opacity-50" : ""
    }`}
  >
    {isLoading ? "Adding..." : "Add Item"}
  </button>
</form>

  );
};

export default AddItemPage;