import products from '@/data/products.json';
import pets from '@/data/pets.json';
import product from '@/data/product.json';

const publicUrl = import.meta.env.VITE_PUBLIC_PATH;

export const productsData = products.map(product => ({
  ...product,
  image: `${publicUrl}${product.image}`,
}));

export const petsData = pets.map(pet => ({
  ...pet,
  image: `${publicUrl}${pet.image}`,
}));

export const productData = {
  ...product,
  images: product.images.map(image => `${publicUrl}${image}`),
};
