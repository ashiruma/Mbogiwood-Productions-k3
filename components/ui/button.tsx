'use client';

import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: 'solid' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const variantClasses: Record<string, string> = {
  solid: 'bg-[var(--primary)] text-[var(--primary-foreground)] hover:brightness-95 border-transparent',
  outline:
    'bg-transparent border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)]',
};

const sizeClasses: Record<string, string> = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-3 py-1.5 text-base',
  lg: 'px-4 py-2 text-lg',
};

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>((props, ref) => {
  const {
    href,
    className = '',
    children,
    type = 'button',
    variant = 'solid',
    size = 'md',
    ...rest
  } = props as ButtonProps;

  const base = clsx('inline-flex items-center rounded transition-colors', variantClasses[variant], sizeClasses[size], className);

  if (href) {
    // Render as a link when href is provided.
    return (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <Link href={href} ref={ref as any} className={base} {...(rest as any)}>
        {children}
      </Link>
    );
  }

  return (
    <button ref={ref as any} type={type} className={base} {...(rest as any)}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export { Button };
export default Button;
