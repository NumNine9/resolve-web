// Define the type for the arguments passed to the action
export interface CreateItemArgs {
    name: string;
    description: string;
    price: number;
    isAvailable?: boolean;
  }
