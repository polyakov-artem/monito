/* eslint-disable react-refresh/only-export-components */
import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { createStrictContext, useStrictContext } from './reactStrictContext';

export type Breakpoints = Record<string, number>;
export type ViewSize = string | null;

type SortFn = (a: [string, number], b: [string, number]) => number;

export function useViewSize(breakpoints: Breakpoints, useMinWidth = true): ViewSize {
  const sortedEntries = useMemo(() => {
    const sortFn: SortFn = useMinWidth ? (a, b) => b[1] - a[1] : (a, b) => a[1] - b[1];

    return Object.entries(breakpoints).sort(sortFn);
  }, [breakpoints, useMinWidth]);

  const [viewSize, setViewSize] = useState<ViewSize>(null);

  useEffect(() => {
    const mediaQueries = sortedEntries.map(([sizeName, width]) => ({
      sizeName,
      media: window.matchMedia(`(${useMinWidth ? 'min' : 'max'}-width: ${width}px)`),
    }));

    const update = () => {
      for (const { sizeName, media } of mediaQueries) {
        if (media.matches) {
          setViewSize(sizeName);
          return;
        }
      }

      setViewSize(null);
    };

    mediaQueries.forEach(({ media }) => media.addEventListener('change', update));

    update();

    return () => {
      mediaQueries.forEach(({ media }) => media.removeEventListener('change', update));
    };
  }, [sortedEntries, useMinWidth]);

  return viewSize;
}

type ViewSizeContextValue = {
  viewSize: ViewSize;
};

export const ViewSizeContext = createStrictContext<ViewSizeContextValue>();

type ViewSizeProviderProps = {
  breakpoints: Breakpoints;
  useMinWidth?: boolean;
  children: ReactNode;
};

export function ViewSizeProvider({
  breakpoints,
  useMinWidth = true,
  children,
}: ViewSizeProviderProps) {
  const viewSize = useViewSize(breakpoints, useMinWidth);

  return <ViewSizeContext value={{ viewSize }}>{children}</ViewSizeContext>;
}

export function useViewSizeContext() {
  return useStrictContext(ViewSizeContext);
}
