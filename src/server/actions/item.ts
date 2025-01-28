import { Item } from 'wasp/entities';
import { type CreateItem, GetAllItems } from 'wasp/server/operations';

const item: Item[] = [];
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

// Implement the action
export const getAllItems: GetAllItems<void , Item[]> = async (args, context): Promise<Item[]> =>{
  return context.entities.Item.findMany({})
}