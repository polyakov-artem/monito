import {
  Header,
  Intro,
  PrimaryBanner,
  Sellers,
  SecondaryBanner,
  ArticlesShowcase,
  Footer,
  ProductShowcase,
} from '@/widgets';
import { productsData, petsData } from '@/entities/product';
import './index.scss';

export const HomePage = () => {
  return (
    <div className="page home-page">
      <Header className="home-page__header" />
      <main className="page-main">
        <Intro />
        <ProductShowcase
          type="pet"
          subtitle="What's new"
          title="Take a look at some of our pets"
          linkText="View more"
          products={petsData}
        />
        <PrimaryBanner />
        <ProductShowcase
          type="product"
          subtitle="Hard to choose right products for your pets?"
          title="Our Products"
          linkText="View more"
          products={productsData}
        />
        <Sellers />
        <SecondaryBanner />
        <ArticlesShowcase />
      </main>
      <Footer />
    </div>
  );
};
