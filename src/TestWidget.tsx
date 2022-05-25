import React from 'react';
import './widgetStyling.css';
import { HyypeWidgetProps } from './index';
import Widget from './Widget';

function TestWidget(props: any) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Testing Widget!!</h1>

        <Widget name="sajib" />
      </header>
    </div>
  );
}

export default TestWidget;
