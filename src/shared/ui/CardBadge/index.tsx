import type { FC } from 'react';
import { SvgIcon } from '@/shared/ui/SvgIcon';
import './index.scss';

export type CardBadgeProps = {
  text: string;
  icon: string;
};

export const CardBadge: FC<CardBadgeProps> = ({ text, icon }) => {
  return (
    <div className="card-badge">
      <span className="card-badge__icon">
        <SvgIcon iconId={icon} />
      </span>
      <span className="card-badge__text">{text}</span>
    </div>
  );
};
