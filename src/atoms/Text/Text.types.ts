import { ReactNode } from 'react';

export type OptionsProps = {
  title: 'h5';
  subtitle: 'subtitle1';
  label: 'subtitle2';
  default: 'h5';
};

export type TextProps = {
  variant: 'title' | 'subtitle' | 'label' | 'default';
  children: ReactNode | string;
  color?: 'default' | 'primary';
};
