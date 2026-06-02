import { filters } from '@/features/searchProduct/model/loadedFilters';
import { ProductSearchProvider } from '@/features/searchProduct/ui/ProductSearchProvider';
import type { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const RootLayout: FC = () => {
  return (
    <ProductSearchProvider loadedFilters={filters}>
      <Outlet />
    </ProductSearchProvider>
  );
};
