import { JsonRpcProvider } from '@ethersproject/providers';
import { Provider as Eip1193Provider } from '@web3-react/types';
import { BASE_API_URL } from 'constants/api';
import { WIDGET_MIN_WIDTH } from 'constants/misc';
import AddLore from 'containers/AddLore';
import React, { useEffect, useMemo, useState } from 'react';
import { Theme, ThemeProvider } from 'theme';

// import logo from './logo.svg';
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
  const { web3Provider, contractAddress, tokenId, clientId, theme, className } = props;
  const [isLorePosting, setIsLorePosting] = useState(true);
  const [nft, setNft] = useState<object | null>(null);

  const width = useMemo(() => {
    const { width } = props;

    if (width && width < WIDGET_MIN_WIDTH) {
      console.warn(`Minimum width is ${WIDGET_MIN_WIDTH}px (you set ${width})`);

      return WIDGET_MIN_WIDTH;
    }

    return width ?? WIDGET_MIN_WIDTH;
  }, [props.width]);

  useEffect(() => {
    const getNftDetails = async () => {
      const url = `${BASE_API_URL}/token/${contractAddress}/${tokenId}?refresh=false`;

      try {
        let nft = await fetch(url);
        nft = await nft.json();

        setNft(nft);
      } catch (error) {
        console.log('err getNftDetails: ', error);
      }
    };

    getNftDetails();
  }, [contractAddress, tokenId]);

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

  //   if (!web3Provider) {
  //     return <Alert>Please provide the web3Provider!</Alert>;
  //   }

  //   return null;
  // };

  return (
    <ThemeProvider theme={theme}>
      <WidgetWrapper width={width}>
        {/* {checkRequiredFields()} */}

        {isLorePosting ? (
          <AddLore nft={nft} />
        ) : (
          <Button onClick={() => setIsLorePosting(true)}>Post Lore</Button>
        )}

        {}
      </WidgetWrapper>
    </ThemeProvider>
  );
}
