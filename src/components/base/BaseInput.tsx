import { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type InputSize = 'sm' | 'md' | 'lg';
type InputVariant = 'default' | 'outline' | 'filled';

interface BaseInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: InputSize;
  variant?: InputVariant;
  fullWidth?: boolean;
  error?: boolean;
  errorMessage?: string;
  label?: string;
}

const sizeClasses: Record<InputSize, string> = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-3 py-2 text-base',
  lg: 'px-4 py-3 text-lg',
};

const variantClasses: Record<InputVariant, string> = {
  default: 'bg-gray-50 border-gray-300 focus:border-blue-500 focus:ring-blue-500',
  outline: 'border border-gray-300 bg-transparent focus:border-blue-500',
  filled: 'bg-gray-100 border-transparent focus:bg-white focus:border-blue-500',
};

const BaseInput = ({
  size = 'md',
  variant = 'default',
  fullWidth = false,
  error = false,
  errorMessage,
  label,
  className = '',
  ...props
}: BaseInputProps) => {
  const baseClasses =
    'block rounded-md shadow-sm transition-all duration-200 focus:ring-2 focus:ring-blue-200 disabled:opacity-50 disabled:cursor-not-allowed border';

  const mergedClasses = twMerge(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    error ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : '',
    fullWidth ? 'w-full' : '',
    className,
  );

  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && <label className="mb-1 block text-sm font-medium text-gray-700">{label}</label>}
      <input className={mergedClasses} {...props} />
      {error && errorMessage && <p className="mt-1 text-sm text-red-600">{errorMessage}</p>}
    </div>
  );
};

export default BaseInput;
