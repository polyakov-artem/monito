import clsx from 'clsx';
import { type FC } from 'react';
import { NumberInput } from '../NumberInput';
import './index.scss';

type InputState = {
  currentMin: number;
  currentMax: number;
};

export type RangeInputProps = {
  name: string;
  id?: string;
  className?: string;
  step?: number;
  state: InputState;
  min?: number;
  max?: number;
  onChange: (name: string, values: InputState) => void;
};

export const RangeInput: FC<RangeInputProps> = ({
  name,
  id,
  className,
  state,
  min,
  max,
  step,
  onChange,
}) => {
  const classes = clsx('range-input', className);
  const { currentMin, currentMax } = state;

  const handleMinValueChange = (value: number) => {
    if (value === currentMin) return;

    onChange(name, {
      currentMin: value,
      currentMax,
    });
  };

  const handleMaxValueChange = (value: number) => {
    if (value === currentMax) return;

    onChange(name, {
      currentMin,
      currentMax: value,
    });
  };

  return (
    <div className={classes}>
      <NumberInput
        className="range-input__field"
        id={id ? `${id}-min` : undefined}
        name={`${name}-min`}
        min={min}
        max={currentMax}
        step={step}
        value={currentMin}
        setValue={handleMinValueChange}
      />

      <NumberInput
        className="range-input__field"
        id={id ? `${id}-max` : undefined}
        name={`${name}-max`}
        min={currentMin}
        max={max}
        step={step}
        value={currentMax}
        setValue={handleMaxValueChange}
      />
    </div>
  );
};
