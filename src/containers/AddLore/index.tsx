// import dynamic from 'next/dynamic';
// import { useRouter } from 'next/router';
import Editor from 'components/Editor/Editor';
import LoreDropdown from 'components/LoreDropdown';
import PostLoreHeader from 'components/PostLore/PostLoreHeader';
import PostLoreFooter from 'components/PostLore/PostLoreFooter';
import { HeaderInfo } from 'components/PostLore/postLoreHeaderStyling';
import React, { FC, useEffect, useState } from 'react';

// import useCommon from 'contexts/CommonProvider/useCommon';
import { EditorMain, EditorWrapper, LoreDropdownWrap, MainWrap, Wrapper } from './addLoreStyling';

interface AddLoreContentProps {
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
  selectedNft,
  setEditor,
  setIsLoreContentAdded,
  getPreviousStep,
  loreContent,
}) => {
  const [imageSrc, setImageSrc] = useState('');
  const [videoSrc, setVideoSrc] = useState('#t=0.1');
  const [showPrompt, setShowPrompt] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [loreType, setLoreType] = useState('Collector Statement');

  const [guidePrompt, setGuidePrompt] = useState<any[] | null>(null);
  const slug = selectedNft?.collectionDetails?.slug || selectedNft?.slug;

  const imageLoader = new Image();

  useEffect(() => {
    const getPrompt = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/v1/${slug}/config`);
        const prompts = await res.json();
        if (prompts?.data?.lorePrompt?.values.length > 0) {
          setGuidePrompt(prompts?.data?.lorePrompt?.values);
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    getPrompt();
  }, [slug]);
  imageLoader.src =
    selectedNft?.metadata?.cachedMedia?.imageUrl ||
    selectedNft?.metadata?.cachedMedia?.videoThumbnail ||
    selectedNft?.metadata?.imageUrl ||
    '';

  imageLoader.onload = () => {
    setImageSrc(
      selectedNft?.metadata?.cachedMedia?.imageUrl ||
        selectedNft?.metadata?.cachedMedia?.videoThumbnail ||
        selectedNft?.metadata?.imageUrl ||
        '',
    );
  };

  return (
    <Wrapper>
      <PostLoreHeader title={'token name'}></PostLoreHeader>

      <MainWrap>
        <EditorMain>
          <EditorWrapper>
            <LoreDropdownWrap>
              <HeaderInfo>Select the type of lore</HeaderInfo>
              <LoreDropdown
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
