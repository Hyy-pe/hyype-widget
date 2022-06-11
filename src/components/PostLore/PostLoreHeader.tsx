import ImgWrap from 'components/ImgWrap';
import { useState } from 'react';
import { useEffect } from 'react';
import { getNftImgSrc } from 'utils';

import { Header, HeaderImg, HeaderInfo, HeaderText, HeaderWrap } from './postLoreHeaderStyling';

export interface PostLoreHeaderProps {
  title?: string;
  nft?: any;
}

export default function PostLoreHeader({ title = '', nft = {} }: PostLoreHeaderProps) {
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    const imgLoader = new Image();

    imgLoader.src = getNftImgSrc(nft);

    imgLoader.onload = () => {
      setImgSrc(imgLoader.src);
    };
  }, [nft]);

  return (
    <HeaderWrap>
      <HeaderImg>
        <ImgWrap imgUrl={imgSrc} onClick={() => {}} />
      </HeaderImg>

      <HeaderText>
        <HeaderInfo>Let’s share about</HeaderInfo>
        <Header>{nft?.metadata?.name || `#${nft?.tokenid}`}</Header>
      </HeaderText>
    </HeaderWrap>
  );
}
