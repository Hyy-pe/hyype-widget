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

  selectedNft?: any;
  setEditor?: any;
  editor?: any;
  clearData?: any;
  setIsLoreContentAdded?: any;
  isLoreContentAdded?: boolean;
  showConfirmPrompt?: boolean;
  hidePrompt?: any;
  userMeta?: any;
  getPreviousStep?: any;
  loreContent?: any;
}

const AddLoreContent: FC<AddLoreContentProps> = ({
  nft = {},
  contractAddress = '',

  selectedNft,
  setEditor,
  loreContent,
}) => {
  const [videoSrc, setVideoSrc] = useState('#t=0.1');
  const [showPrompt, setShowPrompt] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [loreType, setLoreType] = useState('Collector Statement');

  const [guidePrompt, setGuidePrompt] = useState<any[] | null>(null);
  const slug = selectedNft?.collectionDetails?.slug || selectedNft?.slug;

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
            <Editor
              reInit
              editorRef={setEditor}
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
      <PostLoreFooter btnText="Connect Wallet" />
    </Wrapper>
  );
};

export default AddLoreContent;
