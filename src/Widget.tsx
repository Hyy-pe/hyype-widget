import React from 'react';
import { JsonRpcProvider } from '@ethersproject/providers';
import { Provider as Eip1193Provider } from '@web3-react/types';

// import logo from './logo.svg';
import './widgetStyling.css';

export type WidgetProps = {
  name: string;
  jsonRpcEndpoint?: string | JsonRpcProvider;
  provider?: Eip1193Provider | JsonRpcProvider;
};

function Widget(props: WidgetProps) {
  const { name, jsonRpcEndpoint, provider } = props;
  console.log('>> jsonRpcEndpoint: ', jsonRpcEndpoint, ' > provider: ', provider )

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Hello Hyype Widget!!</h1>

        <h2>Your name is {name}</h2>
      </header>
    </div>
  );
}

export default Widget;
