import type { FC, PropsWithChildren } from 'react';
import { ViewSizeProvider } from '@/shared/lib/viewSizeContext';
import { BREAKPOINTS } from '@/shared/config/breakpoints';

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ViewSizeProvider useMinWidth={false} breakpoints={BREAKPOINTS}>
      {children}
    </ViewSizeProvider>
  );
};
