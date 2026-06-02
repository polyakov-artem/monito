import type { LoadedFilters } from './types';

export const filters: LoadedFilters = [
  {
    type: 'checkbox',
    title: 'Gender',
    name: 'gender',
    options: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
    ],
  },
  {
    type: 'checkbox',
    title: 'Color',
    name: 'color',
    options: [
      { label: 'Red', value: 'red', sampleColor: ['var(--pink-red)'] },
      { label: 'Apricot', value: 'apricot', sampleColor: ['var(--orange-shine)'] },
      { label: 'Black', value: 'black', sampleColor: ['var(--neutral-80)'] },
      {
        label: 'Black & White',
        value: 'black-white',
        sampleColor: ['var(--neutral-80)', 'var(--neutral-20)'],
      },
      { label: 'Silver', value: 'silver', sampleColor: ['var(--neutral-40)'] },
      { label: 'Tan', value: 'tan', sampleColor: ['var(--mon-yellow)'] },
    ],
  },

  {
    type: 'range',
    title: 'Price',
    name: 'price',
    min: 0,
    max: 100000,
    step: 100,
  },
  {
    type: 'checkbox',
    title: 'Breed',
    name: 'breed',
    options: [
      { label: 'Small', value: 'small' },
      { label: 'Medium', value: 'medium' },
      { label: 'Large', value: 'large' },
    ],
  },
];
