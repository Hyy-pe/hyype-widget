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
import { WIDGET_DEFAULT_WIDTH, WIDGET_MIN_WIDTH } from 'constants/misc';
import PostLoreContainer from 'containers/PostLoreContainer';
import {
  EditorMain,
  MainWrap,
  Wrapper,
} from 'containers/PostLoreContainer/postLoreContainerStyling';
import React, { useEffect, useMemo, useState } from 'react';
import { Theme, ThemeProvider } from 'theme';

import { PostLoreContainerWrap, WidgetWrapper } from './widgetStyling';

export type WidgetProps = {
  web3Provider?: Eip1193Provider | JsonRpcProvider;
  contractAddress?: string;
  tokenId?: string;
  clientId?: string;
  platformSpecificSigningMessage?: string;
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
  clientId: '',
};

export default function Widget(props: WidgetProps) {
  const {
    web3Provider,
    contractAddress = '',
    tokenId = '',
    clientId = '',
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
  const [isLoading, setIsLoading] = React.useState(false);
  const [nft, setNft] = useState<any | null>(null);

  const width = useMemo(() => {
    const { width } = props;

    if (width && width < WIDGET_MIN_WIDTH) {
      console.warn(`Minimum width is ${WIDGET_MIN_WIDTH}px (you set ${width})`);

      return WIDGET_MIN_WIDTH;
    }

    return width ?? WIDGET_DEFAULT_WIDTH;
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

      // update the env, clientID to change the api domain
      if (globalOb.env !== env) globalOb.env = env;
      if (globalOb.clientId !== clientId) globalOb.clientId = clientId;

      getNftDetails();
    } catch (error) {
      console.log('err getNftDetails: ', error);
    }
  }, [clientId, contractAddress, tokenId, web3Provider, env, tokenThumbnail]);

  // checkRequiredFields();

  const mandatoryProps: any = [
    'clientId',
    'contractAddress',
    'tokenId',
    'env',
    'platformSpecificSigningMessage',
  ];

  // check if any mandatory prop is missing
  const mandatoryMissingProps = mandatoryProps.filter((p: any) => !props[p as keyof WidgetProps]);
  // @ts-ignore
  if (!web3Provider?.selectedAddress) mandatoryMissingProps.push('web3Provider');

  return isLoading ? (
    <ThemeProvider theme={theme}>
      <WidgetWrapper width={width}>
        <Wrapper>
          <PostLoreHeaderLoader />

          <MainWrap minHeight="600px">
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
  ) : (
    <ThemeProvider theme={theme}>
      <WidgetWrapper width={width}>
        <PostLoreContainerWrap>
          <PostLoreContainer
            mandatoryMissingProps={mandatoryMissingProps}
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
        </PostLoreContainerWrap>
      </WidgetWrapper>
    </ThemeProvider>
  );
}
