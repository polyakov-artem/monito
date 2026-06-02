import {
  type ComponentProps,
  type FC,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';
import './index.scss';
import { SvgIcon } from '../SvgIcon';

export type Option = {
  value: string;
  label: string;
  icon?: ReactNode;
};

export type DropdownProps = {
  titlePrefix?: string;
  options: Option[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  theme?: string;
  scale?: string;
  view?: string;
} & Omit<ComponentProps<'div'>, 'onChange'>;

export const Dropdown: FC<DropdownProps> = ({
  titlePrefix = '',
  options,
  defaultValue,
  onChange,
  placeholder = 'Select',
  disabled = false,
  className,
  theme,
  scale,
  view,
  ...rest
}) => {
  const rootRef = useRef<HTMLDivElement>(null);

  const defaultOption = useMemo(
    () => options.find(option => option.value === defaultValue) ?? null,
    [options, defaultValue]
  );

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Option | null>(defaultOption);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    if (!disabled) {
      setIsOpen(prev => !prev);
    }
  }, [disabled]);

  const handleSelect = useCallback(
    (option: Option) => {
      setSelected(option);
      onChange?.(option.value);
      close();
    },
    [onChange, close]
  );

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!rootRef.current || rootRef.current.contains(event.target as Node)) {
        return;
      }

      close();
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [close]);

  const classes = clsx(
    'dropdown',
    className,
    isOpen && 'dropdown_open',
    disabled && 'dropdown_disabled',
    theme && `dropdown_theme_${theme}`,
    scale && `dropdown_scale_${scale}`,
    view && `dropdown_view_${view}`
  );

  return (
    <div {...rest} ref={rootRef} className={classes}>
      <button type="button" className="dropdown__trigger" onClick={toggle} disabled={disabled}>
        <span className="dropdown__trigger-content">
          {selected?.icon && <div className="dropdown__icon">{selected.icon}</div>}

          <span className="dropdown__label">
            {selected ? titlePrefix + selected.label : placeholder}
          </span>

          <div className="dropdown__caret">
            <SvgIcon iconId="caret-down" />
          </div>
        </span>
      </button>

      <div className="dropdown__menu">
        {options.map(option => {
          const isSelected = selected?.value === option.value;

          return (
            <button
              key={option.value}
              className={clsx('dropdown__option', isSelected && 'dropdown__option_selected')}
              onClick={() => handleSelect(option)}
            >
              <span className="dropdown__option-content">
                {option.icon && <span className="dropdown__icon">{option.icon}</span>}
                <span className="dropdown__label">{option.label}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
