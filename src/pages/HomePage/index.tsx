import {
  Header,
  Intro,
  PrimaryBanner,
  Sellers,
  SecondaryBanner,
  PetsShowcase,
  ProductsShowcase,
  ArticlesShowcase,
  Footer,
} from '@/widgets';
import './index.scss';

export const HomePage = () => {
  return (
    <div className="page home-page">
      <Header className="home-page__header" />
      <main className="page-main">
        <Intro />
        <PetsShowcase />
        <PrimaryBanner />
        <ProductsShowcase />
        <Sellers />
        <SecondaryBanner />
        <ArticlesShowcase />
      </main>
      <Footer />
    </div>
  );
};
