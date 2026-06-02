export type CheckboxFilter = {
  type: 'checkbox';
  name: string;
  title: string;
  options: {
    label: string;
    value: string;
    sampleColor?: string[];
  }[];
};

export type RangeFilter = {
  type: 'range';
  title: string;
  name: string;
  min: number;
  max: number;
  step: number;
};

export type LoadedFilters = (CheckboxFilter | RangeFilter)[];

export type CheckboxFilterState = {
  type: 'checkbox';
  values: string[];
};

export type RangeFilterState = {
  type: 'range';
  values: { currentMin: number; currentMax: number };
};

export type SearchState = {
  category: string;
  query: string;
  sort: string;
  page: number;
  perPage: number;
  filters: Record<string, CheckboxFilterState | RangeFilterState>;
};

export type CheckboxFilterView = CheckboxFilter & { value: string[] };

export type RangeFilterView = RangeFilter & {
  value: { currentMin: number; currentMax: number };
};

export type FilterView = CheckboxFilterView | RangeFilterView;
