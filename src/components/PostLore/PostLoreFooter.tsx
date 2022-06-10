import { Button } from 'components';
import ImgWrap from 'components/ImgWrap';
import { useEffect } from 'react';

import { FooterWrap, FooterLeft, FooterRight } from './postLoreFooterStyling';

export interface PostLoreFooterProps {
  btnText?: string;
  onClick?: any;
}

export default function PostLoreFooter(props: PostLoreFooterProps) {
  const { btnText, onClick } = props;

  return (
    <FooterWrap>
      <FooterLeft>footer left</FooterLeft>
      <FooterRight>
        <Button title={btnText} onClick={onClick} />
      </FooterRight>
    </FooterWrap>
  );
}
