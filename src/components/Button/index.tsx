import React from 'react';

import { PrimaryBtn } from './buttonStyling';

interface ButtonProps {
  title?: string;
  href?: string;
  rounded?: string;
  size?: string;
  isDisabled?: boolean;
  readonly?: boolean;
  onClick?: () => void;
}

export default function Button({
  title = '',
  href,
  rounded,
  size,
  isDisabled,
  readonly,
  onClick,
}: ButtonProps) {
  return <PrimaryBtn>{title}</PrimaryBtn>;
}
