'use client';

import React from 'react';
import { cn } from '@/lib/utils/cn';
import { Button } from './Button';

interface CardProps {
  variant?: 'elevated' | 'filled' | 'outlined';
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  icon?: React.ReactNode;
  features?: string[];
  cta?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
}

export const Card: React.FC<CardProps> = ({
  variant = 'elevated',
  title,
  subtitle,
  description,
  image,
  icon,
  features,
  cta,
  children,
  className,
  interactive = false,
}) => {
  const baseStyles = cn(
    'rounded-md3-lg overflow-hidden transition-all duration-md3-short4',
    interactive && 'cursor-pointer hover:scale-[1.02]'
  );

  const variantStyles = {
    elevated: cn(
      'bg-surface-container-low shadow-md3-1',
      'hover:shadow-md3-2 active:shadow-md3-1'
    ),
    filled: cn(
      'bg-surface-container-highest'
    ),
    outlined: cn(
      'bg-surface border border-outline-variant'
    ),
  };

  return (
    <div className={cn(baseStyles, variantStyles[variant], className)}>
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={title || 'Card image'}
            className="w-full h-full object-cover transition-transform duration-md3-medium2 hover:scale-110"
          />
        </div>
      )}

      <div className="p-md3-4">
        {icon && (
          <div className="mb-md3-3 text-primary">
            {icon}
          </div>
        )}

        {subtitle && (
          <p className="text-label-medium text-surface-onVariant uppercase tracking-wider mb-md3-1">
            {subtitle}
          </p>
        )}

        {title && (
          <h3 className="text-title-large text-surface-onSurface mb-md3-2">
            {title}
          </h3>
        )}

        {description && (
          <p className="text-body-medium text-surface-onVariant mb-md3-4">
            {description}
          </p>
        )}

        {features && features.length > 0 && (
          <ul className="space-y-md3-2 mb-md3-4">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-md3-2">
                <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-body-small text-surface-onVariant">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {children}

        {cta && (
          <div className="mt-md3-4">
            <Button
              variant="text"
              href={cta.href}
              onClick={cta.onClick}
            >
              {cta.label}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
