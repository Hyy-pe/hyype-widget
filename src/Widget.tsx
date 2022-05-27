import React, { useState } from 'react';
import { JsonRpcProvider } from '@ethersproject/providers';
import { Provider as Eip1193Provider } from '@web3-react/types';
import AddLoreContent from './containers/AddLoreContent';
import styled from 'styled-components';

const Button = styled.button`
  height: 36px;
  border-radius: 18px;
  font-size: 14px;
  letter-spacing: 0.31px;
  font-weight: 600;
  text-transform: capitalize;
  cursor: pointer;
  padding: 8px 25px;
  line-height: 1;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  outline: none;
  background-position: center center;
  transition: all 0.4s ease 0s;
  border: 1px solid rgb(255, 129, 98);
  background-color: rgb(255, 129, 98);
  color: white;
`;

const Alert = styled.p`
  color: red;
`;

// import logo from './logo.svg';
import './widgetStyling.css';

export type WidgetProps = {
  name: string;
  jsonRpcEndpoint?: string | JsonRpcProvider;
  provider?: Eip1193Provider | JsonRpcProvider;
};

function Widget(props: WidgetProps) {
  const { name, jsonRpcEndpoint, provider } = props;
  console.log('>> jsonRpcEndpoint: ', jsonRpcEndpoint, ' > provider: ', provider);
  const [isLorePosting, setIsLorePosting] = useState(true);

  const checkRequiredFields = () => {
    console.log(jsonRpcEndpoint, ' >> ', provider);
    if (!jsonRpcEndpoint && !provider) {
      return <Alert>Please provide the jsonRpcEndpoint and provider!</Alert>;
    } else if (!jsonRpcEndpoint) {
      return <Alert>Please provide the jsonRpcEndpoint!</Alert>;
    } else if (!provider) {
      return <Alert>Please provide the provider!</Alert>;
    }

    return null;
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {checkRequiredFields()}
        <h1>Hello Hyype Widget!!</h1>

        {isLorePosting ? (
          <AddLoreContent />
        ) : (
          <Button onClick={() => setIsLorePosting(true)}>Post Lore</Button>
        )}

        {}
      </header>
    </div>
  );
}

export default Widget;
