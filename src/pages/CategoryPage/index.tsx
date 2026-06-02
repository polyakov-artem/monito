import { Header, Footer, TertiaryBanner, ProductSearch } from '@/widgets';
import { routerPaths } from '@/shared/config/routes';
import { Breadcrumbs } from '@/shared/ui/Breadcrumbs';
import './index.scss';

const crumbs = [
  { to: routerPaths.category, name: 'Home' },
  { to: routerPaths.category, name: 'Dog' },
  { to: routerPaths.category, name: 'Small Dog' },
];

export const CategoryPage = () => {
  return (
    <div className="page category-page">
      <Header className="category-page__header" />
      <main className="page-main">
        <div className="container">
          <Breadcrumbs crumbs={crumbs} className="category-page__breadcrumbs" />
        </div>
        <TertiaryBanner />
        <div className="container">
          <ProductSearch className="category-page__product-search" />
        </div>
      </main>
      <Footer />
    </div>
  );
};
