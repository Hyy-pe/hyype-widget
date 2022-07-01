import { CrossIcon, TickIcon } from 'components/Icons';
import PostLoreHeader from 'components/PostLore/PostLoreHeader';
import PoweredFooter from 'components/PoweredFooter';

import { ErrMsg, MsgBody, MsgInfo, MsgTitle, Wrapper } from './lorePostedStateStyling';

const SUCCESS_LORE_POST_TITLE = 'Success!';
const FAILED_LORE_POST_TITLE = 'Something went wrong';
const SUCCESS_LORE_POST_INFO =
  'Lore was shared successfully. You can always hide an old lore and repost.';
const FAILED_LORE_POST_INFO = 'Lore could not be posted. Please try again.';

export interface LorePostedStateProps {
  lorePostingStatus: string;
  nft: any;
  tokenName?: string;
  tokenThumbnail?: string;
  header?: string;
}

export default function LorePostedState({
  lorePostingStatus,
  nft,
  tokenName,
  tokenThumbnail,
  header,
}: LorePostedStateProps) {
  return (
    <Wrapper>
      <PostLoreHeader
        nft={nft}
        tokenName={tokenName}
        tokenThumbnail={tokenThumbnail}
        header={header}
      ></PostLoreHeader>

      <MsgBody>
        {lorePostingStatus === 'success' ? <TickIcon /> : <CrossIcon />}

        <MsgTitle>
          {lorePostingStatus === 'success' ? SUCCESS_LORE_POST_TITLE : FAILED_LORE_POST_TITLE}
        </MsgTitle>
        <MsgInfo>
          {lorePostingStatus === 'success' ? (
            SUCCESS_LORE_POST_INFO
          ) : lorePostingStatus === 'failed' ? (
            FAILED_LORE_POST_INFO
          ) : (
            <ErrMsg>{lorePostingStatus}</ErrMsg>
          )}
        </MsgInfo>
      </MsgBody>

      <PoweredFooter />
    </Wrapper>
  );
}
