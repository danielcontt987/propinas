export type MenuItem = {
  id: number;   // Unique identifier
  name: string; // Name of the item in the menu
  price: number; // Price of the item
}

export type OrderItem = MenuItem & {
    quantity: number;
};