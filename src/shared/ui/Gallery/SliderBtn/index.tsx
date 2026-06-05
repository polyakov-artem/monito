import type { ComponentProps, FC } from 'react';
import { SvgIcon } from '../../SvgIcon';
import { Button } from '../../Button';

type SliderBtnProps = {
  icon: 'prev' | 'next';
  disabled: boolean;
  className?: string;
} & ComponentProps<'button'>;

export const SliderBtn: FC<SliderBtnProps> = ({ className, icon, ...props }) => {
  return (
    <Button
      as="button"
      type="button"
      view="glass"
      rounded="full"
      iconOnly
      className={className}
      iconBefore={<SvgIcon iconId={icon === 'prev' ? 'caret-left' : 'caret-right'} />}
      {...props}
    />
  );
};
