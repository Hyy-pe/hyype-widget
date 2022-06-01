import React, { FC, useState, useEffect } from 'react';
// import dynamic from 'next/dynamic';
// import { useRouter } from 'next/router';

import { Button, Switch, ImgWrap } from 'components';
import { NotificationsPanel } from 'containers';
import { VideoWrapper } from 'containers/NftDetailImg/nftDetailImgStyling';
import PostLoreHeader from 'components/PostLore/PostLoreHeader';

// import useCommon from 'contexts/CommonProvider/useCommon';

import {
  Wrapper,
  Container,
  Sidebar,
  MainWrap,
  Main,
  Heading,
  Subheading,
  ImgContainer,
  EditorContainer,
  EditorWrapper,
  HeadingWrap,
  HeadingSecondary,
  SeeWritingPrompt,
  EditorMain,
} from './addLoreStyling';

import Editor from 'components/Editor/Editor';
import { ThemeProvider } from 'theme';

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
  setLoreType?: any;
  getPreviousStep?: any;
  loreContent?: any;
  loreType?: any;
}

const AddLoreContent: FC<AddLoreContentProps> = ({
  selectedNft,
  setEditor,
  setIsLoreContentAdded,
  setLoreType,
  loreType,
  getPreviousStep,
  loreContent,
}) => {
  const [imageSrc, setImageSrc] = useState('');
  const [videoSrc, setVideoSrc] = useState('#t=0.1');
  const [showPrompt, setShowPrompt] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

  // const { useWindowDimensions } = useCommon();
  // const { width } = useWindowDimensions();
  // const router = useRouter();

  return (
    <Wrapper>
      <Container>
        <PostLoreHeader title={'token name'}></PostLoreHeader>

        <MainWrap>
          <EditorMain>
            {/* <HeaderContainer>
                <AddLoreHeader>
                  <ImgContainer>
                    <ImgWrap url={imageSrc} name={selectedNft?.name} />
                  </ImgContainer>
                  <HeaderContent>
                    <Heading>Let’s write about</Heading>
                    <Subheading>
                      Avastar #123
                    </Subheading>
                  </HeaderContent>
                </AddLoreHeader>
              </HeaderContainer> */}
            {/* <HeadingWrap>
              <HeadingSecondary>Choose the type of Lore you are writing</HeadingSecondary>
              {guidePrompt !== null && (
                <SeeWritingPrompt onClick={() => setShowPrompt(true)}>
                  See Writing prompt
                </SeeWritingPrompt>
              )}
            </HeadingWrap> */}
            {/* <LoreDropdown setLoreType={setLoreType} loreType={loreType} slug={slug} selectedNft={selectedNft} /> */}
            <EditorWrapper>
              <EditorContainer>
                <Editor
                  reInit
                  editorRef={setEditor}
                  options={{
                    placeholder: 'Enter for new paragraph',
                    autofocus: true,
                    onReady: () => {
                      console.count('READY callback 1234');
                    },
                    // onChange: () => {
                    //   setIsLoreContentAdded(true);
                    // },
                  }}
                  data={loreContent}
                />
              </EditorContainer>
            </EditorWrapper>
          </EditorMain>
        </MainWrap>
      </Container>
    </Wrapper>
  );
};

export default AddLoreContent;
