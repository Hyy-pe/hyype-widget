import { JsonRpcProvider } from '@ethersproject/providers';
import { fetchNftDetails } from 'api/nft';
import { Provider as Eip1193Provider } from '@web3-react/types';
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
  const { web3Provider, contractAddress, tokenId = '', clientId, theme, className } = props;
  const [showEditor, setShowEditor] = useState(true);
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
        const nft = await fetchNftDetails({ contractAddress, tokenId });
        setNft(nft);
      };

      getNftDetails();
    } catch (error) {
      console.log('err getNftDetails: ', error);
    }
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

        {showEditor ? (
          <AddLore contractAddress={contractAddress} nft={nft} />
        ) : (
          <Button onClick={() => setShowEditor(true)}>Post Lore</Button>
        )}

        {}
      </WidgetWrapper>
    </ThemeProvider>
  );
}
