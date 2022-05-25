import React from 'react';
// import logo from './logo.svg';
import './widgetStyling.css';
import { HyypeWidgetProps } from './index';

function Widget(props: HyypeWidgetProps) {
  const { name } = props;

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
