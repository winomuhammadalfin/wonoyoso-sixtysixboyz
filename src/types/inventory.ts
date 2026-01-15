export interface InventoryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  minStock: number;
  unit: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

export type Category = 
  | 'Oli & Pelumas'
  | 'Sparepart Mesin'
  | 'Ban & Velg'
  | 'Aki & Kelistrikan'
  | 'Body & Aksesoris'
  | 'Perkakas';

export const categories: Category[] = [
  'Oli & Pelumas',
  'Sparepart Mesin',
  'Ban & Velg',
  'Aki & Kelistrikan',
  'Body & Aksesoris',
  'Perkakas'
];
