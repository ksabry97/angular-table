const baseUrl = 'https://ks-shop-api.vercel.app/products';
export interface Product {
  image: string;
  brand: string;
  rating: number;
  name: string;
  price: number;
}
