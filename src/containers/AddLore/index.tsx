import { getNonce, postLore } from 'api/lore';
import { Buffer } from 'buffer';
import Editor from 'components/Editor/Editor';
import LoreDropdown from 'components/LoreDropdown';
import PostLoreFooter from 'components/PostLore/PostLoreFooter';
import PostLoreHeader from 'components/PostLore/PostLoreHeader';
import { HeaderInfo } from 'components/PostLore/postLoreHeaderStyling';
import React, { FC, useState } from 'react';

import { EditorMain, EditorWrapper, LoreDropdownWrap, MainWrap, Wrapper } from './addLoreStyling';

interface AddLoreContentProps {
  contractAddress: string;
  nft?: any;
  tokenId?: string;
  web3Provider: any;

  selectedNft?: any;
  setEditor?: any;
  editor?: any;
  loreContent?: any;
}

const AddLoreContent: FC<AddLoreContentProps> = ({
  contractAddress = '',
  nft = {},
  tokenId,
  web3Provider,

  selectedNft,
  loreContent,
}) => {
  // const [nonce, setNonce] = useState<any | null>(null);
  const [editor, setEditor] = useState<any>(null);
  const [btnText, setBtnText] = useState<string>('Post Lore');

  const [loreType, setLoreType] = useState('Collector Statement');

  const slug = selectedNft?.collectionDetails?.slug || selectedNft?.slug;

  // sign the message from wallet popup
  const doSign = async (nonce: any) => {
    try {
      let nonceMsg = `Post a lore on Hyype by verifying your wallet address. One time code : ${nonce}`;
      nonceMsg = Buffer.from(nonceMsg).toString('hex');

      const from = web3Provider.selectedAddress; // wallet

      const sign = await web3Provider.request({
        method: 'personal_sign',
        params: [nonceMsg, from, ''],
      });

      return sign;
    } catch (error) {
      console.log('err doSign: ', doSign);
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
      });

      if (!nonce) {
        console.log('err nonce: ');
        setBtnText('Post Lore');
        return;
      }

      // sign
      const sign = await doSign(nonce);

      if (!sign) {
        setBtnText('Post Lore');
        return;
      }

      // post lore
      setBtnText('Posting ...');

      const editorContent = await editor?.save();

      const payload = {
        signedMessage: sign,
        walletAddress,
        lore: {
          type: loreType,
          tokenId,
          contractAddress,
          loreDetails: editorContent,
          // loreData: '<p>This is the first lore posting from Hyype widget!!</p>',
        },
      };

      const postLoreRest = await postLore({ payload });

      if (postLoreRest?.loreId) {
        console.log('>>> YESSS, LORE IS POSTED!');
      }
    } catch (error) {
      console.log('err signAndPostLore: ', error);
    }

    setBtnText('Post Lore');
  };

  return (
    <Wrapper>
      <PostLoreHeader nft={nft} title={'token name'}></PostLoreHeader>

      <MainWrap>
        <EditorMain>
          <EditorWrapper>
            <LoreDropdownWrap>
              <HeaderInfo>Select the type of lore</HeaderInfo>
              <LoreDropdown
                contractAddress={contractAddress}
                setLoreType={setLoreType}
                loreType={loreType}
                slug={slug}
                selectedNft={selectedNft}
              />
            </LoreDropdownWrap>

            {/* editor js */}
            <Editor
              reInit
              setEditor={setEditor}
              options={{
                placeholder: 'Enter for new paragraph',
                autofocus: true,
                onReady: () => {
                  console.count('Check callback 1234!');
                },
                // onChange: () => {
                //   setIsLoreContentAdded(true);
                // },
              }}
              data={loreContent}
            />
          </EditorWrapper>
        </EditorMain>
      </MainWrap>

      <PostLoreFooter btnText={btnText} onClick={signAndPostLore} />
    </Wrapper>
  );
};

export default AddLoreContent;
