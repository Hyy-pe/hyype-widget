import type EditorJS from "@editorjs/editorjs";
import { getNonce, postLore } from 'api/lore';
import { Buffer } from 'buffer';
import DisabledWidget from 'components/DisabledWidget';
import Editor from 'components/Editor/Editor';
import LoreDropdown from 'components/LoreDropdown';
import LorePostedState from 'components/PostLore/LorePostedState';
import PostLoreFooter from 'components/PostLore/PostLoreFooter';
import PostLoreHeader from 'components/PostLore/PostLoreHeader';
import { HeaderInfo } from 'components/PostLore/postLoreHeaderStyling';
import PoweredFooter from 'components/PoweredFooter';
import React, { FC, useEffect, useState } from 'react';
import {
  EditorMain,
  EditorWrapper,
  LoreDropdownWrap,
  MainWrap,
  Wrapper,
} from './postLoreContainerStyling';

// const Editor = React.lazy(() => import('components/Editor/Editor'));

export interface PostLoreContentProps {
  mandatoryMissingProps: any;
  contractAddress: string;
  nft?: any;
  tokenId?: string;
  web3Provider: any;
  clientId: string;
  platformSpecificSigningMessage?: string;
  env: string;
  loreContent?: any;
  tokenName?: string;
  tokenThumbnail?: string;
  header?: string;
  subHeader?: string;
  callToAction?: string;
}

const PostLoreContent: FC<PostLoreContentProps> = (props) => {
  const {
    mandatoryMissingProps = [],
    contractAddress = '',
    nft = {},
    tokenId,
    web3Provider,
    clientId,
    platformSpecificSigningMessage,
    env,
    loreContent,
    tokenName,
    tokenThumbnail,
    header,
    subHeader,
    callToAction,
  } = props;

  const [editor, setEditor] = useState<any>(null);
  const [loreType, setLoreType] = useState('Collector Statement');
  const [btnText, setBtnText] = useState<string>('Post Lore');
  const [isSignRejected, setIsSignRejected] = useState<boolean>(false);
  const [lorePostingStatus, setLorePostingStatus] = useState<string>('');

  const editorRef = React.useRef();

  useEffect(() => {
    setBtnText(callToAction || 'Post Lore');
  }, [callToAction]);

  // sign the message from wallet popup
  const doSign = async (nonce: any) => {
    try {
      let nonceMsg = `${platformSpecificSigningMessage}${nonce}`;
      nonceMsg = Buffer.from(nonceMsg).toString('hex');

      const from = web3Provider.selectedAddress; // wallet

      const sign = await web3Provider.request({
        method: 'personal_sign',
        params: [nonceMsg, from, ''],
      });

      return sign;
    } catch (error: any) {
      console.log('err doSign: ', error);

      // 4001 = User rejected the request.
      if (error?.code === 4001) {
        setIsSignRejected(true);
      }
      return '';
    }
  };

  // get nonce | sign message | post lore
  const signAndPostLore = async () => {
    try {
      setBtnText('Waiting to Sign ...');
      const walletAddress = web3Provider?.selectedAddress;

      const nonce = await getNonce({
        address: walletAddress,
        action: 'CREATE_LORE',
        clientId,
        env,
      });

      if (!nonce) {
        console.log('err nonce: ');
        setBtnText(callToAction || 'Post Lore');
        return;
      }

      // sign
      const sign = await doSign(nonce);

      if (!sign) {
        setBtnText(callToAction || 'Post Lore');
        return;
      }

      // post lore
      setBtnText('Posting ...');

      // @ts-ignore
      const editorContent = await editorRef.current?.save();

      const payload = {
        signedMessage: sign,
        walletAddress,
        lore: {
          type: loreType,
          tokenId,
          contractAddress,
          loreDetails: editorContent,
        },
      };

      const postLoreResp = await postLore({ payload, clientId, env });

      if (postLoreResp?.loreId) {
        setLorePostingStatus('success');
      } else {
        throw postLoreResp;
      }
    } catch (error: any) {
      console.log('err signAndPostLore: ', error);
      setLorePostingStatus(error?.message || 'failed');
    }

    setBtnText(callToAction || 'Post Lore');
  };

  if (mandatoryMissingProps?.length > 0) {
    return <DisabledWidget {...props} />;
  }

  if (lorePostingStatus) {
    return (
      <LorePostedState
        lorePostingStatus={lorePostingStatus}
        nft={nft}
        tokenName={tokenName}
        tokenThumbnail={tokenThumbnail}
        header={header}
      />
    );
  }

  const isBtnLoading = ![callToAction, 'Post Lore'].includes(btnText);

  return (
    <Wrapper>
      <PostLoreHeader
        nft={nft}
        tokenName={tokenName}
        tokenThumbnail={tokenThumbnail}
        header={header}
      ></PostLoreHeader>

      <MainWrap>
        <EditorMain>
          <EditorWrapper>
            <LoreDropdownWrap>
              <HeaderInfo> {subHeader || 'Select the type of lore'}</HeaderInfo>
              <LoreDropdown
                contractAddress={contractAddress}
                setLoreType={setLoreType}
                loreType={loreType}
                env={env}
              />
            </LoreDropdownWrap>

            {/* editor js */}
            <Editor
              // reInit
              setEditor={setEditor}
              editorRef={editorRef}
              options={{
                placeholder: 'Enter for new paragraph',
                // autofocus: true,
                onReady: () => {
                  console.count('Editor.js is ready!');
                },
                // onChange: () => {
                //   setIsLoreContentAdded(true);
                // },
              }}
              data={{}}
            />
          </EditorWrapper>
        </EditorMain>
      </MainWrap>

      <PostLoreFooter
        btnText={btnText}
        isSignRejected={isSignRejected}
        isBtnLoading={isBtnLoading}
        onClick={signAndPostLore}
      />

      <PoweredFooter />
    </Wrapper>
  );
};

export default PostLoreContent;
