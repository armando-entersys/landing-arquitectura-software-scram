'use client';

import React from 'react';
import { cn } from '@/lib/utils/cn';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  helperText?: string;
  variant?: 'filled' | 'outlined';
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      helperText,
      variant = 'outlined',
      className,
      id,
      ...props
    },
    ref
  ) => {
    const textareaId = id || `textarea-${label.toLowerCase().replace(/\s+/g, '-')}`;
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
          <textarea
            ref={ref}
            id={textareaId}
            className={cn(
              'peer w-full bg-transparent outline-none resize-none',
              'px-md3-4 pt-md3-5 pb-md3-2',
              'text-body-large text-surface-onSurface placeholder-transparent',
              'min-h-[120px]',
              className
            )}
            placeholder={label}
            {...props}
          />

          <label
            htmlFor={textareaId}
            className={cn(
              'absolute left-md3-4 transition-all duration-md3-short4 pointer-events-none',
              'peer-placeholder-shown:top-md3-4 peer-placeholder-shown:text-body-large',
              'peer-focus:top-md3-2 peer-focus:text-label-small',
              'top-md3-2 text-label-small',
              hasError ? 'text-error' : 'text-surface-onVariant peer-focus:text-primary'
            )}
          >
            {label}
            {props.required && <span className="text-error ml-1">*</span>}
          </label>
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

Textarea.displayName = 'Textarea';
