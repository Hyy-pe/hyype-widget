import ImgWrap from 'components/ImgWrap';
import { useState } from 'react';
import { useEffect } from 'react';
import { getNftImgSrc } from 'utils';

import {
  HeaderWrap,
  HeaderImg,
  ImgLoader,
  DescWrapLoader,
  DescShort,
  DescLong,
} from './postLoreHeaderStyling';

export default function PostLoreHeaderLoader() {
  return (
    <HeaderWrap>
      <HeaderImg>
        <ImgLoader />
      </HeaderImg>

      <DescWrapLoader>
        <DescShort />
        <DescLong />
      </DescWrapLoader>
    </HeaderWrap>
  );
}
