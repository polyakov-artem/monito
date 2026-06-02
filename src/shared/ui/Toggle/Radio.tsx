import type { FC } from 'react';
import { Toggle, type ToggleProps } from './Toggle';

type RadioProps = Omit<ToggleProps, 'type' | 'element'>;

export const Radio: FC<RadioProps> = props => {
  return <Toggle {...props} type="radio" element="radio" />;
};
