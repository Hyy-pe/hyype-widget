import { Spinner } from 'components/PostLore/postLoreHeaderStyling';
import React from 'react';

import { BtnWrap, LoadingIcon, PrimaryBtn } from './buttonStyling';

export interface ButtonProps {
  title?: string;
  href?: string;
  rounded?: string;
  size?: string;
  readonly?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  title = '',
  href,
  rounded,
  size,
  isLoading,
  isDisabled,
  readonly,
  onClick,
}: ButtonProps) {
  return (
    <BtnWrap>
      {isLoading && (
        <LoadingIcon>
          <Spinner color="#FF8162" size={24} />
        </LoadingIcon>
      )}

      <PrimaryBtn onClick={onClick} disabled={isDisabled || isLoading}>
        {title}
      </PrimaryBtn>
    </BtnWrap>
  );
}
