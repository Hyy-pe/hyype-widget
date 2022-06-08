import ImgWrap from 'components/ImgWrap';
import { useEffect } from 'react';

import { Button } from 'components';

import { FooterWrap, FooterLeft, FooterRight } from './postLoreFooterStyling';

export interface PostLoreFooterProps {
  btnText?: string;
}

export default function PostLoreFooter(props: PostLoreFooterProps) {
  const { btnText } = props;

  return (
    <FooterWrap>
      <FooterLeft>footer left</FooterLeft>
      <FooterRight>
        <Button title={btnText} />
      </FooterRight>
    </FooterWrap>
  );
}
