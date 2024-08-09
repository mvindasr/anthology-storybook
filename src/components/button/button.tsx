import { ComponentProps } from 'react';
import styles from './button.module.css';
import clsx from 'clsx';

export type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'destructive';
  size?: 'small' | 'medium' | 'large';
};
export const Button = ({
  variant = 'primary',
  size = 'medium',
  className,
  ...props
}: ButtonProps) => {
  let classes = clsx(
    'bg-indigo-500 hover:bg-indigo-400',
    styles.button,
    styles[variant],
    styles[size],
    className,
  );

  return <button {...props} className={classes} />;
};
