import React, { useState } from 'react';
import { JsonRpcProvider } from '@ethersproject/providers';
import { Provider as Eip1193Provider } from '@web3-react/types';
import AddLore from 'containers/AddLore';

// import logo from './logo.svg';
import { Button, Alert } from './widgetStyling';

export type WidgetProps = {
  web3Provider?: Eip1193Provider | JsonRpcProvider;
  contractAddress?: string;
  tokenId?: string;
  clientId?: string;
};

export default function Widget(props: WidgetProps) {
  const { web3Provider, contractAddress, tokenId, clientId } = props;
  const [isLorePosting, setIsLorePosting] = useState(true);

  const checkRequiredFields = () => {
    if (!web3Provider) {
      return <Alert>Please provide the web3Provider!</Alert>;
    }

    return null;
  };

  return (
    <div className="App">
      <header className="App-header">
        {checkRequiredFields()}
        <h1>Hello Hyype Widget!!</h1>

        {isLorePosting ? (
          <AddLore />
        ) : (
          <Button onClick={() => setIsLorePosting(true)}>Post Lore</Button>
        )}

        {}
      </header>
    </div>
  );
}
