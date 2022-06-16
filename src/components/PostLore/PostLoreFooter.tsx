import { Button } from 'components';

import { FooterLeft, FooterRight, FooterWrap } from './postLoreFooterStyling';

export interface PostLoreFooterProps {
  btnText?: string;
  isBtnLoading?: boolean;
  onClick?: any;
}

export default function PostLoreFooter(props: PostLoreFooterProps) {
  const { btnText, isBtnLoading, onClick } = props;

  return (
    <FooterWrap>
      <FooterLeft>footer left</FooterLeft>
      <FooterRight>
        <Button title={btnText} isLoading={isBtnLoading} onClick={onClick} />
      </FooterRight>
    </FooterWrap>
  );
}
