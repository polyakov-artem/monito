import { SvgIcon } from '@/shared/ui/SvgIcon';
import clsx from 'clsx';
import type { FC } from 'react';
import './index.scss';

type ShareProps = {
  className?: string;
  text?: string;
};

export const Share: FC<ShareProps> = ({ className, text }) => {
  const classes = clsx('share', className);
  return (
    <div className={classes}>
      <span className="share__text">
        <SvgIcon iconId="share" className="share__text-icon" />
        {text}
      </span>
      <div className="share__list">
        <a href="#" className="share__link">
          <SvgIcon iconId="facebook" className="share__icon" />
        </a>
        <a href="#" className="share__link">
          <SvgIcon iconId="twitter" className="share__icon" />
        </a>
        <a href="#" className="share__link">
          <SvgIcon iconId="instagram" className="share__icon" />
        </a>
        <a href="#" className="share__link">
          <SvgIcon iconId="youtube" className="share__icon" />
        </a>
      </div>
    </div>
  );
};
