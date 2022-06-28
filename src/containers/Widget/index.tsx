import { JsonRpcProvider } from '@ethersproject/providers';
import { Provider as Eip1193Provider } from '@web3-react/types';
import { fetchNftDetails } from 'api/nft';
import { FooterWrap } from 'components/PostLore/postLoreFooterStyling';
import PostLoreHeaderLoader from 'components/PostLore/PostLoreHeaderLoader';
import {
  DescLong,
  DescWrapLoader,
  Spinner,
  SpinnerWrap,
} from 'components/PostLore/postLoreHeaderStyling';
import { WIDGET_MIN_WIDTH } from 'constants/misc';
import PostLoreContainer from 'containers/PostLoreContainer';
import {
  EditorMain,
  MainWrap,
  Wrapper,
} from 'containers/PostLoreContainer/postLoreContainerStyling';
import React, { useEffect, useMemo, useState } from 'react';
import { Theme, ThemeProvider } from 'theme';

import { Button, PostLoreContainerWrap, WidgetDisabledInfo, WidgetWrapper } from './widgetStyling';

export type WidgetProps = {
  web3Provider?: Eip1193Provider | JsonRpcProvider;
  contractAddress?: string;
  tokenId?: string;
  clientId?: string;
  platformSpecificSigningMessage: string;
  env?: string;
  theme?: Theme;
  width?: string | number;
  className?: string;
  tokenName?: string;
  tokenThumbnail?: string;
  header?: string;
  subHeader?: string;
  callToAction?: string;
};

export const globalOb = {
  env: '',
};

export default function Widget(props: WidgetProps) {
  const {
    web3Provider,
    contractAddress = '',
    tokenId = '',
    clientId,
    platformSpecificSigningMessage,
    env = '',
    theme,
    className,
    tokenName,
    tokenThumbnail,
    header,
    subHeader,
    callToAction,
  } = props;
  const [showEditor, setShowEditor] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [nft, setNft] = useState<any | null>(null);

  const width = useMemo(() => {
    const { width } = props;

    if (width && width < WIDGET_MIN_WIDTH) {
      console.warn(`Minimum width is ${WIDGET_MIN_WIDTH}px (you set ${width})`);

      return WIDGET_MIN_WIDTH;
    }

    return width ?? WIDGET_MIN_WIDTH;
  }, [props.width]);

  useEffect(() => {
    try {
      const getNftDetails = async () => {
        try {
          setIsLoading(true);
          const nft = await fetchNftDetails({ env, contractAddress, tokenId });

          setNft(nft);
          setIsLoading(false);
        } catch (error) {
          console.log('error getNftDetails: ', getNftDetails);
        }
      };

      // update the env to change the api domain
      if (globalOb.env !== env) globalOb.env = env;

      getNftDetails();
    } catch (error) {
      console.log('err getNftDetails: ', error);
    }
  }, [contractAddress, tokenId, web3Provider, env, tokenThumbnail]);

  // checkRequiredFields();

  const isWidgetDisabled =
    !web3Provider?.selectedAddress ||
    !contractAddress ||
    !tokenId ||
    !env ||
    !platformSpecificSigningMessage;

  // if (!web3Provider) {
  //   return <h3>Select web3Provider from right side dropdown option!</h3>;
  // } else if (web3Provider && !web3Provider?.selectedAddress) {
  //   return <h3>Wallet is connecting!</h3>;
  // }

  if (isLoading) {
    return (
      <ThemeProvider theme={theme}>
        <WidgetWrapper width={width}>
          <Wrapper>
            <PostLoreHeaderLoader />

            <MainWrap style={{ minHeight: '600px' }}>
              <EditorMain>
                <SpinnerWrap>
                  <Spinner color="#FF8162" />
                </SpinnerWrap>
              </EditorMain>
            </MainWrap>

            <FooterWrap>
              <DescWrapLoader>
                <DescLong />
              </DescWrapLoader>
            </FooterWrap>
          </Wrapper>
        </WidgetWrapper>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <WidgetWrapper width={width}>
        {/* {checkRequiredFields()} */}

        {isWidgetDisabled && (
          <WidgetDisabledInfo>
            <p>Provide the web3Provider, contractAddress, tokenId from right side!</p>
            <p>Make sure the wallet is connected and you own the token.</p>
          </WidgetDisabledInfo>
        )}

        <PostLoreContainerWrap isWidgetDisabled={isWidgetDisabled}>
          {showEditor ? (
            <PostLoreContainer
              contractAddress={contractAddress}
              nft={nft}
              tokenId={tokenId}
              web3Provider={web3Provider}
              clientId={clientId}
              platformSpecificSigningMessage={platformSpecificSigningMessage}
              env={env}
              tokenName={tokenName}
              tokenThumbnail={tokenThumbnail}
              header={header}
              subHeader={subHeader}
              callToAction={callToAction}
            />
          ) : (
            <Button onClick={() => setShowEditor(true)}>Post Lore</Button>
          )}
        </PostLoreContainerWrap>
      </WidgetWrapper>
    </ThemeProvider>
  );
}
