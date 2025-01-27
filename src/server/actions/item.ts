import { Item } from 'wasp/entities';
import { type CreateItem } from 'wasp/server/operations';
import { CreateItemArgs } from '../../types';

// Implement the action
export const createItem: CreateItem<{ name: string, description: string, price: number, isAvailable: boolean }, Item> = async (args, context): Promise<Item> => {
  const { name, description, price, isAvailable } = args;

  // Validate required fields
  if (!name || !description || price == null) {
    throw new Error('Required fields are missing.');
  }

  // Create the item in the database
  const item = await context.entities.Item.create({
    data: {
      name,
      description,
      price,
      isAvailable: isAvailable ?? true, // Default to true if not provided
    },
  });

  return item;
};