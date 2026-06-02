import { createBrowserRouter, RouterProvider } from 'react-router';
import { routerPaths } from '@/shared/config/routes';
import { ButtonsPage } from '@/pages/ButtonsPage';
import { TogglesPage } from '@/pages/TogglesPage';
import { HomePage } from '@/pages/HomePage';
import { CategoryPage } from '@/pages/CategoryPage';
import { RootLayout } from '@/widgets/RootLayout/RootLayout';
const basename = import.meta.env.VITE_PUBLIC_PATH.replace(/\/$/, '');

const router = createBrowserRouter(
  [
    {
      path: routerPaths.home,
      Component: RootLayout,
      children: [
        { path: routerPaths.buttons, Component: ButtonsPage },
        { path: routerPaths.toggles, Component: TogglesPage },
        { index: true, Component: HomePage },
        { path: routerPaths.category, Component: CategoryPage },
      ],
    },
  ],
  { basename }
);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
