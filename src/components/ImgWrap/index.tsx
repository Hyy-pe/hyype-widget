import React, { FC, useEffect, useState } from 'react';
import { ImgContainer } from './imgWrapStyling';

export interface ImgWrapProps {
  imgUrl?: string;
  onClick?: () => void;
}

export default function ImgWrap(props: ImgWrapProps) {
  const { imgUrl, onClick } = props;

  return <ImgContainer imgUrl={imgUrl} onClick={onClick} />;
}
