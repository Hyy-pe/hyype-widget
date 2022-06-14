import { JsonRpcProvider } from '@ethersproject/providers';
import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
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
import AddLore from 'containers/AddLore';
import { EditorMain, MainWrap, Wrapper } from 'containers/AddLore/addLoreStyling';
import React, { useEffect, useMemo, useState } from 'react';
import { Theme, ThemeProvider } from 'theme';

import { Button, WidgetWrapper } from './widgetStyling';

export type WidgetProps = {
  web3Provider?: Eip1193Provider | JsonRpcProvider;
  contractAddress?: string;
  tokenId?: string;
  clientId?: string;
  width?: string | number;
  theme?: Theme;
  className?: string;
};

export default function Widget(props: WidgetProps) {
  const { web3Provider, contractAddress = '', tokenId = '', clientId, theme, className } = props;
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
          const nft = await fetchNftDetails({ contractAddress, tokenId });

          setNft(nft);
          setIsLoading(false);
        } catch (error) {
          console.log('error getNftDetails: ', getNftDetails);
        }
      };

      getNftDetails();
    } catch (error) {
      console.log('err getNftDetails: ', error);
    }
  }, [contractAddress, tokenId, web3Provider]);

  // const checkRequiredFields = () => {
  //   console.log(
  //     ' >> web3Provider',
  //     web3Provider,
  //     ' >> contractAddress: ',
  //     contractAddress,
  //     '> tokenId: ',
  //     tokenId,
  //     ' > clientId: ',
  //     clientId,
  //   );
  // };

  // checkRequiredFields();

  if (!web3Provider) {
    return <h3>Select web3Provider from right side dropdown option!</h3>;
  }

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

        {showEditor ? (
          <AddLore
            contractAddress={contractAddress}
            nft={nft}
            tokenId={tokenId}
            web3Provider={web3Provider}
          />
        ) : (
          <Button onClick={() => setShowEditor(true)}>Post Lore</Button>
        )}

        {}
      </WidgetWrapper>
    </ThemeProvider>
  );
}
