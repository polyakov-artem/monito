import clsx from 'clsx';
import { useEffect, useMemo, useState, type ChangeEvent, type FC } from 'react';

import './index.scss';
import { SvgIcon } from '../SvgIcon';

export type NumberInputProps = {
  id?: string;
  name: string;
  className?: string;
  min?: number;
  max?: number;
  step?: number;
  value: number;
  setValue: (value: number) => void;
};

export const NumberInput: FC<NumberInputProps> = ({
  id,
  name,
  className,
  min,
  max,
  step = 1,
  value,
  setValue,
}) => {
  const classes = clsx('number-input', className);

  const decimals = useMemo(() => {
    return `${step}`.split('.')[1]?.length ?? 0;
  }, [step]);

  const factor = useMemo(() => {
    return 10 ** decimals;
  }, [decimals]);

  const [inputText, setInputText] = useState(() => String(value));

  useEffect(() => {
    setInputText(String(value));
  }, [value]);

  const round = (num: number) => {
    return Math.round(num * factor) / factor;
  };

  const parseValue = (raw: string): number | null => {
    const trimmed = raw.trim();

    if (!trimmed) {
      return null;
    }

    const normalized = trimmed.replace(',', '.');

    const parsed = Number(normalized);

    if (!Number.isFinite(parsed)) {
      return null;
    }

    return round(parsed);
  };

  const normalizeValue = (next: number | null): number => {
    if (next === null) {
      return value;
    }

    let normalized = next;

    if (min !== undefined) {
      normalized = Math.max(normalized, min);
    }

    if (max !== undefined) {
      normalized = Math.min(normalized, max);
    }

    return round(normalized);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const next = e.target.value;

    // разрешаем:
    // 123
    // 123.
    // 123.45
    // -123
    // -123.45

    if (!/^-?\d*[.,]?\d*$/.test(next)) {
      return;
    }

    setInputText(next);
  };

  const handleBlur = () => {
    const normalized = normalizeValue(parseValue(inputText));

    setInputText(String(normalized));
    setValue(normalized);
  };

  const stepChange = (delta: number) => {
    const parsed = parseValue(inputText);
    const base = parsed ?? value;

    const result = Math.round(base * factor + delta * factor) / factor;

    const normalized = normalizeValue(result);

    setInputText(String(normalized));
    setValue(normalized);
  };

  return (
    <div className={classes}>
      <input
        id={id}
        className="number-input__field"
        inputMode="decimal"
        name={name}
        value={inputText}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <div className="number-input__controls">
        <button
          type="button"
          className="number-input__button"
          aria-label="Increase value"
          onClick={() => stepChange(step)}
        >
          <span className="number-input__button-content">
            <SvgIcon iconId="caret-up" className="number-input__icon" />
          </span>
        </button>

        <button
          type="button"
          className="number-input__button"
          aria-label="Decrease value"
          onClick={() => stepChange(-step)}
        >
          <span className="number-input__button-content">
            <SvgIcon iconId="caret-down" className="number-input__icon" />
          </span>
        </button>
      </div>
    </div>
  );
};
