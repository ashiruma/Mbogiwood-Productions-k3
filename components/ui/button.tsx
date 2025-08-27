'use client';

import Link from 'next/link';
import React from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: 'solid' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>((props, ref) => {
  const { href, className = '', children, type = 'button', ...rest } = props as ButtonProps;

  const base = `inline-block px-3 py-1 rounded transition-colors ${className}`.trim();

  if (href) {
    // Render as a link when href is provided. Some button-only props like disabled won't apply to anchors.
    return (
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
