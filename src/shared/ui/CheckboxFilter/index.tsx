import clsx from 'clsx';
import { useId, type CSSProperties, type FC } from 'react';
import { Checkbox } from '../Toggle/Checkbox';
import './index.scss';

export type CheckboxFilterProps = {
  title: string;
  name: string;
  className?: string;
  state: string[];
  onChange: (name: string, value: string, autoCommit?: boolean) => void;
  options: {
    label: string;
    value: string;
    sampleColor?: string[];
  }[];
};

export const CheckboxFilter: FC<CheckboxFilterProps> = ({
  options,
  title,
  name,
  className,
  state,
  onChange,
}) => {
  const classes = clsx('checkbox-filter', className);
  const idPrefix = useId();

  const handleChange = (value: string) => {
    onChange(name, value);
  };

  return (
    <div className={classes}>
      <h4 className="checkbox-filter__title">{title}</h4>

      <ul className="checkbox-filter__list">
        {options.map(({ label, value, sampleColor }) => {
          const id = `${idPrefix}-${value}`;
          const styles: CSSProperties = {};

          if (sampleColor) {
            if (Array.isArray(sampleColor)) {
              const percentage = 100 / sampleColor.length;
              styles['--sample-gradient'] = sampleColor
                .map(color => `${color} ${percentage}%`)
                .join(', ');
            } else {
              styles['--sample-color'] = sampleColor;
            }
          }

          return (
            <li key={value} className="checkbox-filter__item" style={styles}>
              <Checkbox
                id={id}
                value={value}
                name={name}
                theme="primary"
                scale="m"
                onChange={() => handleChange(value)}
                checked={state.includes(value)}
              />
              <label htmlFor={id} className="checkbox-filter__label">
                {sampleColor && <span className="checkbox-filter__sample"></span>}
                {label}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
