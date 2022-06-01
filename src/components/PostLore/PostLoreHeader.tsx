import { useEffect } from 'react';

import ImgWrap from 'components/ImgWrap';
import { HeaderWrap, HeaderText, HeaderInfo, Header } from './postLoreHeaderStyling';

export interface PostLoreHeaderProps {
  title?: string;
}

export default function PostLoreHeader(props: PostLoreHeaderProps) {
  return (
    <HeaderWrap>
      

      <ImgWrap>
      </ImgWrap>

      <HeaderText>
        <HeaderInfo>Let’s share about</HeaderInfo>
        <Header>Token Name</Header>
      </HeaderText>
    </HeaderWrap>
  );
}
