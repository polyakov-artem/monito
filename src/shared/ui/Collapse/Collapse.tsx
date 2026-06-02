import {
  memo,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  type ComponentProps,
  type FC,
} from 'react';

import './Collapse.scss';
import clsx from 'clsx';

export type TCollapse = {
  expanded?: boolean;
  duration?: number;
} & ComponentProps<'div'>;

const Collapse: FC<TCollapse> = ({
  className,
  expanded = false,
  duration = 200,
  children,
  style,
  ...rest
}) => {
  const classes = clsx('collapse', className, { expanded });
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const updateHeight = useCallback(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, []);

  useLayoutEffect(() => {
    updateHeight();

    if (!contentRef.current) return;

    const observer = new ResizeObserver(updateHeight);
    observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, [children, updateHeight]);

  return (
    <div
      {...rest}
      className={classes}
      style={{
        ...style,
        height: expanded ? height : 0,
        transitionDuration: `${duration}ms`,
      }}
    >
      <div ref={contentRef} className="collapse__content">
        {children}
      </div>
    </div>
  );
};

export default memo(Collapse);
