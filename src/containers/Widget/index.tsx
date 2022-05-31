import React, { useState, useMemo } from 'react';
import { JsonRpcProvider } from '@ethersproject/providers';
import { Provider as Eip1193Provider } from '@web3-react/types';
import AddLore from 'containers/AddLore';
import { Theme, ThemeProvider } from 'theme';
import { WIDGET_MIN_WIDTH } from 'constants/misc';

// import logo from './logo.svg';
import { WidgetWrapper, Button, Alert } from './widgetStyling';

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

  const width = useMemo(() => {
    const { width } = props;

    if (width && width < WIDGET_MIN_WIDTH) {
      console.warn(`Minimum width is ${WIDGET_MIN_WIDTH}px (you set ${width})`);

      return WIDGET_MIN_WIDTH;
    }

    return width ?? WIDGET_MIN_WIDTH;
  }, [props.width]);

  const checkRequiredFields = () => {
    console.log(
      ' >> web3Provider',
      web3Provider,
      ' >> contractAddress: ',
      contractAddress,
      '> tokenId: ',
      tokenId,
      ' > clientId: ',
      clientId,
    );

    if (!web3Provider) {
      return <Alert>Please provide the web3Provider!</Alert>;
    }

    return null;
  };

  return (
    <ThemeProvider theme={theme}>
      <WidgetWrapper width={width}>
        <div className="App">
          <header className="App-header">
            {checkRequiredFields()}

            {isLorePosting ? (
              <AddLore />
            ) : (
              <Button onClick={() => setIsLorePosting(true)}>Post Lore</Button>
            )}

            {}
          </header>
        </div>
      </WidgetWrapper>
    </ThemeProvider>
  );
}
