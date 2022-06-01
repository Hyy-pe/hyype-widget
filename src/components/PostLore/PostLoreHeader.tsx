import ImgWrap from 'components/ImgWrap';
import { useEffect } from 'react';

import { HeaderWrap, HeaderText, HeaderInfo, Header, HeaderImg } from './postLoreHeaderStyling';

export interface PostLoreHeaderProps {
  title?: string;
}

export default function PostLoreHeader(props: PostLoreHeaderProps) {
  return (
    <HeaderWrap>
      <HeaderImg>
        <ImgWrap
          imgUrl="https://media.hyy.pe/metadata/150xAUTO/0x8a90cab2b38dba80c64b7734e58ee1db38b8992e-9952.png"
          onClick={() => {}}
        />
      </HeaderImg>

      <HeaderText>
        <HeaderInfo>Let’s share about</HeaderInfo>
        <Header>Your Perspective</Header>
      </HeaderText>
    </HeaderWrap>
  );
}
