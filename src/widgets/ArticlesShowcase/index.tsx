import type { FC } from 'react';
import clsx from 'clsx';
import { routerPaths } from '@/shared/config/routes';
import { ShowcaseLayout } from '../../shared/ui/ShowcaseLayout';
import { articlesData } from '@/entities/article';
import { Link } from 'react-router-dom';
import { ArticleCard } from '@/entities/article';
import './index.scss';

type ArticlesShowcaseProps = {
  className?: string;
};

export const ArticlesShowcase: FC<ArticlesShowcaseProps> = ({ className }) => {
  const classes = clsx('articles-showcase', className);

  return (
    <ShowcaseLayout
      className={classes}
      subtitle="You already know ?"
      title="Useful pet knowledge"
      link={routerPaths.category}
      linkText="View more"
    >
      <div className="articles-showcase__grid">
        {articlesData.map((article, index) => (
          <Link to={routerPaths.details} key={index} className="articles-showcase__card">
            <ArticleCard {...article} />
          </Link>
        ))}
      </div>
    </ShowcaseLayout>
  );
};
