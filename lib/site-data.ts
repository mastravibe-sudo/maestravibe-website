// lib/site-data.ts
// Static/dummy data ported 1:1 from the original script.js. Swap these
// arrays for real API calls (fetch from your backend) whenever you're
// ready to wire this page up to live data.

export type InventoryStatus = 'In Stock' | 'Low Stock' | 'Out of Stock';
export type InventoryCategory = 'Design' | 'Electronics' | 'Accessories';

export type InventoryProduct = {
  id: number;
  name: string;
  quantity: number;
  price: number;
  status: InventoryStatus;
  category: InventoryCategory;
  image: string;
};

export const dummyProducts: InventoryProduct[] = [
  { id: 1, name: 'Modern Blueprint A', quantity: 12, price: 250.0, status: 'In Stock', category: 'Design', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMZdvpi7LVdUQVOqeQXVS9Mt0xlQe6vlphbw&s' },
  { id: 2, name: 'Smart Lighting Hub', quantity: 5, price: 199.99, status: 'Low Stock', category: 'Electronics', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=400&q=80' },
  { id: 3, name: 'Coastal Frame Set', quantity: 45, price: 89.0, status: 'In Stock', category: 'Accessories', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=400&q=80' },
  { id: 4, name: 'Industrial Drafting Table', quantity: 0, price: 540.0, status: 'Out of Stock', category: 'Design', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80' },
];

export type OrderStatus = 'pre-order' | 'transit' | 'confirmed' | 'cancelled';

export type Order = {
  id: string;
  date: string; // ISO date string, e.g. "2026-03-10"
  price: number;
  status: OrderStatus;
  statusLabel: string;
};

export const orderData: Order[] = [
  { id: 'FWB127364372', date: '2026-03-10', price: 4756, status: 'pre-order', statusLabel: 'Pre-order' },
  { id: 'FWB125467980', date: '2026-03-05', price: 499, status: 'transit', statusLabel: 'In transit' },
  { id: 'FWB139485607', date: '2026-02-15', price: 85, status: 'confirmed', statusLabel: 'Confirmed' },
  { id: 'FWB146284623', date: '2025-12-20', price: 180, status: 'cancelled', statusLabel: 'Cancelled' },
];

export type Customer = {
  name: string;
  email: string;
  phone: string;
  lastOrder: string; // ISO date string
};

export const customerData: Customer[] = [
  { name: 'Jane Smith', email: 'jane@architecture.com', phone: '508.123.4567', lastOrder: '2026-03-10' },
  { name: 'Robert Miller', email: 'rob@builders.com', phone: '508.987.6543', lastOrder: '2026-02-28' },
  { name: 'Sarah Chen', email: 'sarah.c@design.io', phone: '508.444.2211', lastOrder: '2026-03-15' },
];

// Hero slider background images (kept as external URLs, same as the original)
export const heroSlides: string[] = [
  'https://static.wixstatic.com/media/92790b_96a78e23d09b46ed6543fc79f434592e.jpg/v1/fill/w_980,h_614,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/92790b_96a78e23d09b46ed6543fc79f434592e.jpg',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80',
  'https://cdn.pixabay.com/photo/2021/01/20/09/42/lake-5933622_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/03/27/15/02/couple-2179256_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/01/14/10/48/central-america-3081559_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/02/26/22/02/architecture-3184153_1280.jpg',
  'https://cdn.pixabay.com/photo/2023/02/04/16/29/boat-7767575_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/05/27/14/13/glass-ball-3433598_1280.jpg',
];