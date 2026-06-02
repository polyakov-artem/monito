import clsx from 'clsx';
import type { ComponentProps, FC } from 'react';
import './index.scss';

export type ArticleCardProps = {
  image: string;
  tags: string[];
  className?: string;
  title: string;
  description: string;
} & ComponentProps<'article'>;

export const ArticleCard: FC<ArticleCardProps> = props => {
  const { className, image, title, tags, description } = props;

  const classes = clsx('article-card', className);

  return (
    <article className={classes}>
      <div className="article-card__image-wrap">
        <img className="article-card__image" src={image} alt={title} />
      </div>
      <div className="article-card__content">
        <ul className="article-card__tags">
          {tags.map((tag, index) => (
            <li key={index} className="article-card__tag">
              {tag}
            </li>
          ))}
        </ul>
        <div className="article-card__text-content">
          <h5 className="article-card__title">{title}</h5>
          <p className="article-card__description">{description}</p>
        </div>
      </div>
    </article>
  );
};
