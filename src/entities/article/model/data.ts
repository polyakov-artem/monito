import articles from '@/data/articles.json';

const publicUrl = import.meta.env.VITE_PUBLIC_PATH;

export const articlesData = articles.map(article => ({
  ...article,
  image: `${publicUrl}${article.image}`,
}));
