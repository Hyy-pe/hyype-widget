import React, { useState } from 'react';
import { JsonRpcProvider } from '@ethersproject/providers';
import { Provider as Eip1193Provider } from '@web3-react/types';
import AddLore from './containers/AddLore';
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
  web3Provider?: Eip1193Provider | JsonRpcProvider;
};

export default function Widget(props: WidgetProps) {
  const { name, web3Provider } = props;
  // console.log('>> jsonRpcEndpoint: ', jsonRpcEndpoint, ' > provider: ', provider);
  const [isLorePosting, setIsLorePosting] = useState(true);

  const checkRequiredFields = () => {
    console.log(' >> web3Provider', web3Provider);
    if (!web3Provider) {
      return <Alert>Please provide the web3Provider!</Alert>;
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
          <AddLore />
        ) : (
          <Button onClick={() => setIsLorePosting(true)}>Post Lore</Button>
        )}

        {}
      </header>
    </div>
  );
}

// export default Widget;
