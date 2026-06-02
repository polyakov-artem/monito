import { Button } from '@/shared/ui/Button';
import { SvgIcon } from '@/shared/ui/SvgIcon';
import type { FC, ReactNode } from 'react';
import clsx from 'clsx';
import './index.scss';

type ShowcaseLayoutProps = {
  title: string;
  inlineTitle?: boolean;
  subtitle: string;
  link: string;
  linkText?: string;
  className?: string;
  children: ReactNode;
};

export const ShowcaseLayout: FC<ShowcaseLayoutProps> = ({
  title,
  subtitle,
  link,
  linkText,
  inlineTitle,
  className,
  children,
}) => {
  const classes = clsx('showcase-layout', className);

  return (
    <section className={classes}>
      <div className="container showcase-layout__container">
        <div
          className={clsx(
            'showcase-layout__title-block',
            inlineTitle && 'showcase-layout__title-block_inline'
          )}
        >
          <p className="showcase-layout__subtitle">{subtitle}</p>
          <h2 className="showcase-layout__title">{title}</h2>
        </div>

        <Button
          className="showcase-layout__btn"
          to={link}
          as="link"
          theme="primary"
          scale="m"
          view="outline"
          rounded="pill"
          iconAfter={<SvgIcon iconId="caret-right" />}
        >
          {linkText}
        </Button>

        <div className="showcase-layout__content">{children}</div>
      </div>
    </section>
  );
};
