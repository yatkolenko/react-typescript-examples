import { SelectHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type SelectDimension = 'sm' | 'md' | 'lg';
type SelectVariant = 'default' | 'outline' | 'filled';

interface BaseSelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  dimension?: SelectDimension;
  variant?: SelectVariant;
  options: {
    value: string | number;
    label: string;
    disabled?: boolean;
  }[];
  fullWidth?: boolean;
}

const dimensionClasses: Record<SelectDimension, string> = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-3 py-2 text-base',
  lg: 'px-4 py-3 text-lg',
};

const variantClasses: Record<SelectVariant, string> = {
  default: 'bg-gray-50 border-gray-300 focus:border-blue-500 focus:ring-blue-500',
  outline: 'border border-gray-300 bg-transparent focus:border-blue-500',
  filled: 'bg-gray-100 border-transparent focus:bg-white focus:border-blue-500',
};

const BaseSelect = ({
  dimension = 'md',
  variant = 'default',
  options,
  className = '',
  fullWidth = false,
  disabled = false,
  ...props
}: BaseSelectProps) => {
  const baseClasses =
    'block rounded-md shadow-sm transition-all duration-200 focus:ring-2 focus:ring-blue-200 disabled:opacity-50 disabled:cursor-not-allowed border';

  const mergedClasses = twMerge(
    baseClasses,
    dimensionClasses[dimension],
    variantClasses[variant],
    fullWidth ? 'w-full' : '',
    className,
  );

  return (
    <select className={mergedClasses} disabled={disabled} {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value} disabled={option.disabled}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default BaseSelect;
