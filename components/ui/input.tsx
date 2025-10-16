'use client';

import clsx from 'clsx';
import { ComponentProps } from 'react';

type InputProps = {
  variant?: 'sm' | 'md' | 'lg';
} & ComponentProps<'input'>;

export function Input({ type, variant = 'md', className, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={clsx(
        // Base layout
        'flex w-full min-w-0 rounded-md border border-input bg-transparent dark:bg-input/30',
        'text-base file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground',
        'file:inline-flex file:border-0 file:bg-transparent',
        'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
        'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
        'shadow-xs outline-none transition-[color,box-shadow]',
        'selection:bg-primary selection:text-primary-foreground',

        // 🔹 Size variants
        {
          sm: 'h-8 px-2 py-1 text-sm',
          md: 'h-9 px-3 py-1.5 text-sm',
          lg: 'h-11 px-4 py-2 text-base',
        }[variant],

        // Custom class override
        className,
      )}
      {...props}
    />
  );
}
