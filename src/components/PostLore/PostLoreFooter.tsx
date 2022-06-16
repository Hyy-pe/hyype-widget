import { Button } from 'components';

import { FooterLeft, FooterRight, FooterWrap } from './postLoreFooterStyling';

export interface PostLoreFooterProps {
  btnText?: string;
  isSignRejected?: boolean;
  isBtnLoading?: boolean;
  onClick?: any;
}

export default function PostLoreFooter(props: PostLoreFooterProps) {
  const { btnText, isSignRejected, isBtnLoading, onClick } = props;

  return (
    <FooterWrap>
      <FooterLeft>{isSignRejected && <p>Declined signature tx in the wallet</p>}</FooterLeft>
      <FooterRight>
        <Button title={btnText} isLoading={isBtnLoading} onClick={onClick} />
      </FooterRight>
    </FooterWrap>
  );
}
