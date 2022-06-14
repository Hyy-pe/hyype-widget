import { TickIcon, CrossIcon } from 'components/Icons';
import PostLoreHeader from 'components/PostLore/PostLoreHeader';

import { MsgBody, MsgInfo, MsgTitle, Wrapper } from './lorePostedStateStyling';

const SUCCESS_LORE_POST_TITLE = 'Success!';
const FAILED_LORE_POST_TITLE = 'Something went wrong';
const SUCCESS_LORE_POST_INFO =
  'Lore was shared successfully. You can always hide an old lore and repost.';
const FAILED_LORE_POST_INFO = 'Lore could not be posted. Please try again.';

export interface LorePostedStateProps {
  lorePostingStatus: string;
  nft: any;
}

export default function LorePostedState({ lorePostingStatus, nft }: LorePostedStateProps) {
  return (
    <Wrapper>
      <PostLoreHeader nft={nft} title={'token name'}></PostLoreHeader>

      <MsgBody>
        {lorePostingStatus === 'success' ? <TickIcon /> : <CrossIcon />}

        <MsgTitle>
          {lorePostingStatus === 'success' ? SUCCESS_LORE_POST_TITLE : FAILED_LORE_POST_TITLE}
        </MsgTitle>
        <MsgInfo>
          {lorePostingStatus === 'success' ? SUCCESS_LORE_POST_INFO : FAILED_LORE_POST_INFO}
        </MsgInfo>
      </MsgBody>
    </Wrapper>
  );
}
