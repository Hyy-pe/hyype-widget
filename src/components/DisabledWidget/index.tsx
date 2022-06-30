import { WarningIcon } from 'components/Icons';
import LoreDropdown from 'components/LoreDropdown';
import { MsgBody, MsgInfo, MsgTitle, Wrapper } from 'components/PostLore/lorePostedStateStyling';
import PostLoreHeader from 'components/PostLore/PostLoreHeader';
import { HeaderInfo } from 'components/PostLore/postLoreHeaderStyling';
import PoweredFooter from 'components/PoweredFooter';
import { PostLoreContentProps } from 'containers/PostLoreContainer';
import { LoreDropdownWrap } from 'containers/PostLoreContainer/postLoreContainerStyling';

import {
  DisabledDropdownWrap,
  MsgListsHeader,
  MsgInfoLists,
  MsgListItem,
} from './disabledWidgetStyling';

const DISABLED_LORE_POST_TITLE = 'Unable to find the token';

export interface LorePostedStateProps {
  nft: any;
  tokenName?: string;
  tokenThumbnail?: string;
  header?: string;
  mandatoryMissingProps?: any;
}

export default function LorePostedState(props: PostLoreContentProps) {
  const {
    nft,
    tokenName,
    tokenThumbnail,
    header,
    subHeader,
    contractAddress,
    env,
    mandatoryMissingProps,
  } = props;

  return (
    <Wrapper>
      <PostLoreHeader
        nft={nft}
        tokenName={tokenName}
        tokenThumbnail={tokenThumbnail}
        header={header}
      ></PostLoreHeader>

      <DisabledDropdownWrap>
        <LoreDropdownWrap>
          <HeaderInfo> {subHeader || 'Select the type of lore'}</HeaderInfo>
          <LoreDropdown
            contractAddress={contractAddress}
            setLoreType={() => {}}
            loreType="Collector Statement"
            env={env}
          />
        </LoreDropdownWrap>
      </DisabledDropdownWrap>

      <MsgBody>
        <WarningIcon />

        <MsgTitle>{DISABLED_LORE_POST_TITLE}</MsgTitle>
        <MsgInfo>
          <MsgListsHeader>
            Please make sure that the required parameters are correct -
          </MsgListsHeader>

          <MsgInfoLists>
            {mandatoryMissingProps.map((prop: string) => (
              <MsgListItem key={prop}>{prop}</MsgListItem>
            ))}
          </MsgInfoLists>
        </MsgInfo>
      </MsgBody>

      <PoweredFooter />
    </Wrapper>
  );
}
