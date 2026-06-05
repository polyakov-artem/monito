import { Header, Footer, ProductDetails, ProductShowcase } from '@/widgets';
import { productData } from '@/entities/product';
import { petsData } from '@/entities/product';
import { Customers } from '@/widgets/Customers';
import './index.scss';

const data = petsData.slice(0, 4);

export const DetailsPage = () => {
  return (
    <div className="page details-page">
      <Header className="details-page__header" />
      <main className="page-main">
        <ProductDetails {...productData} className="details-page__product-details" />
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
