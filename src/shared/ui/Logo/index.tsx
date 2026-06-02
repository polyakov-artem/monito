import type { PropsWithClassName } from '@/shared/types/types';
import clsx from 'clsx';
import type { FC } from 'react';
import './logo.scss';
import { Link } from 'react-router-dom';
import { SvgIcon } from '../SvgIcon';

const root = 'logo';

export const Logo: FC<PropsWithClassName> = ({ className }) => {
  return (
    <Link to="/" className={clsx('logo', className)}>
      <SvgIcon className={`${root}__img`} iconId="logo" />
    </Link>
  );
};
