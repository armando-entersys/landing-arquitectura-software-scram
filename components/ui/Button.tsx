'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';
import { trackCTAClick } from '@/lib/tracking/gtm';

interface ButtonProps {
  variant?: 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  trackingData?: {
    location: string;
    destination?: string;
  };
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'filled',
  size = 'md',
  icon,
  iconPosition = 'left',
  href,
  loading = false,
  disabled = false,
  fullWidth = false,
  onClick,
  children,
  className,
  type = 'button',
  trackingData,
}) => {
  const baseStyles = cn(
    'inline-flex items-center justify-center gap-2',
    'font-label-large transition-all duration-md3-short4',
    'rounded-md3-full focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
    fullWidth && 'w-full'
  );

  const variantStyles = {
    filled: cn(
      'bg-primary text-primary-onPrimary shadow-md3-1',
      'hover:shadow-md3-2 active:shadow-md3-1',
      'focus:ring-primary/50'
    ),
    outlined: cn(
      'border border-outline text-primary bg-transparent',
      'hover:bg-primary/8 active:bg-primary/12',
      'focus:ring-primary/50'
    ),
    text: cn(
      'text-primary bg-transparent',
      'hover:bg-primary/8 active:bg-primary/12',
      'focus:ring-primary/50'
    ),
    elevated: cn(
      'bg-surface-container-low text-primary shadow-md3-1',
      'hover:shadow-md3-2 active:shadow-md3-1',
      'focus:ring-primary/50'
    ),
    tonal: cn(
      'bg-secondary-container text-secondary-onContainer',
      'hover:shadow-md3-1 active:shadow-none',
      'focus:ring-secondary/50'
    ),
  };

  const sizeStyles = {
    sm: 'h-10 px-md3-3 text-label-medium',
    md: 'h-12 px-md3-6 text-label-large',
    lg: 'h-14 px-md3-8 text-title-medium',
  };

  const combinedStyles = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const handleClick = () => {
    if (trackingData) {
      trackCTAClick({
        cta_text: children as string,
        cta_location: trackingData.location,
        destination: trackingData.destination || href,
      });
    }
    onClick?.();
  };

  const iconElement = loading ? (
    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  ) : icon;

  const content = (
    <>
      {iconElement && iconPosition === 'left' && iconElement}
      <span>{children}</span>
      {iconElement && iconPosition === 'right' && iconElement}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedStyles} onClick={handleClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled || loading}
      className={combinedStyles}
    >
      {content}
    </button>
  );
};
