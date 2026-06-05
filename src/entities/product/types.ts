export type Product = {
  id: string;
  title: string;
  specs: Record<string, string | undefined>;
  price: string;
  badge?: {
    text: string;
    icon: string;
  };
  image: string;
};
