import { useState } from 'react';

import ImgWrap from 'components/ImgWrap';
import { useEffect } from 'react';

import { HeaderWrap, HeaderText, HeaderInfo, Header, HeaderImg } from './postLoreHeaderStyling';
import { getNftImgSrc } from 'utils';

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
