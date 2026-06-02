import type { FC } from 'react';
import { Toggle, type ToggleProps } from './Toggle';
import { SvgIcon } from '../SvgIcon';

type CheckboxProps = Omit<ToggleProps, 'type' | 'element'>;

export const Checkbox: FC<CheckboxProps> = props => {
  return <Toggle icon={<SvgIcon iconId="tick" />} {...props} type="checkbox" element="checkbox" />;
};
