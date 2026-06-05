import { Header, Footer, ProductDetails, ProductShowcase } from '@/widgets';
import product from '@/data/product.json';
import './index.scss';
import pets from '@/data/pets.json';
import { Customers } from '@/widgets/Customers';

const data = pets.slice(0, 4);

export const DetailsPage = () => {
  return (
    <div className="page details-page">
      <Header className="details-page__header" />
      <main className="page-main">
        <ProductDetails {...product} className="details-page__product-details" />
        <Customers className="details-page__customers" />
        <ProductShowcase
          title="See More Puppies"
          subtitle="Whats new?"
          linkText="View all"
          products={data}
          className="details-page__product-showcase"
        />
      </main>
      <Footer />
    </div>
  );
};
