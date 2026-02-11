'use client';

import React from 'react';
import { cn } from '@/lib/utils/cn';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  helperText?: string;
  variant?: 'filled' | 'outlined';
  options: { value: string; label: string }[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      helperText,
      variant = 'outlined',
      options,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const selectId = id || `select-${label.toLowerCase().replace(/\s+/g, '-')}`;
    const hasError = !!error;

    const containerStyles = cn(
      'relative rounded-md3-xs transition-all duration-md3-short4',
      variant === 'filled' && cn(
        'bg-surface-container-highest',
        'hover:bg-surface-container-high',
        'focus-within:bg-surface-container-high',
        hasError ? 'border-b-2 border-error' : 'border-b border-surface-onVariant'
      ),
      variant === 'outlined' && cn(
        'border',
        hasError
          ? 'border-error focus-within:border-error focus-within:border-2'
          : 'border-outline focus-within:border-primary focus-within:border-2'
      )
    );

    return (
      <div className="w-full">
        <div className={containerStyles}>
          <select
            ref={ref}
            id={selectId}
            className={cn(
              'peer w-full bg-transparent outline-none appearance-none',
              'px-md3-4 pt-md3-5 pb-md3-2 pr-md3-10',
              'text-body-large text-surface-onSurface',
              className
            )}
            {...props}
          >
            <option value="" disabled>
              Seleccionar...
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <label
            htmlFor={selectId}
            className={cn(
              'absolute left-md3-4 top-md3-2 text-label-small pointer-events-none',
              hasError ? 'text-error' : 'text-surface-onVariant'
            )}
          >
            {label}
            {props.required && <span className="text-error ml-1">*</span>}
          </label>

          <svg
            className="absolute right-md3-3 top-1/2 -translate-y-1/2 w-6 h-6 text-surface-onVariant pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {(helperText || error) && (
          <p className={cn(
            'mt-md3-1 ml-md3-4 text-label-small',
            hasError ? 'text-error' : 'text-surface-onVariant'
          )}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
