import ImgWrap from 'components/ImgWrap';
import { useState } from 'react';
import { useEffect } from 'react';
import { getNftImgSrc } from 'utils';

import { Header, HeaderImg, HeaderInfo, HeaderText, HeaderWrap } from './postLoreHeaderStyling';

export interface PostLoreHeaderProps {
  nft?: any;
  tokenName?: string;
  tokenThumbnail?: string;
  header?: string;
}

export default function PostLoreHeader({
  nft = {},
  tokenName,
  tokenThumbnail,
  header,
}: PostLoreHeaderProps) {
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    const imgLoader = new Image();

    imgLoader.src = tokenThumbnail || getNftImgSrc(nft);

    imgLoader.onload = () => {
      setImgSrc(imgLoader.src);
    };
  }, [nft, tokenThumbnail]);

  const getTokenName = () => {
    if (tokenName) {
      return tokenName;
    } else if (nft?.metadata?.name) {
      return nft?.metadata?.name;
    } else if (nft?.tokenId) {
      return `#${nft?.tokenId}`;
    } else {
      return '<Token name>';
    }
  };

  return (
    <HeaderWrap>
      <HeaderImg>
        <ImgWrap imgUrl={imgSrc} onClick={() => {}} />
      </HeaderImg>

      <HeaderText>
        <HeaderInfo>{header || 'Let’s share about'}</HeaderInfo>
        <Header>{getTokenName()}</Header>
      </HeaderText>
    </HeaderWrap>
  );
}
