import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Widget from './Widget';
import TestWidget from './TestWidget';
import reportWebVitals from './reportWebVitals';

export type HyypeWidgetProps = {
  name: string;
};

export function HyypeWidget(props: HyypeWidgetProps) {
  return (
    <React.StrictMode>
      <Widget {...props} />
    </React.StrictMode>
  );
}

// reportWebVitals();

/**
 * TEST WIDGET
 */

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// root.render(
//   <React.StrictMode>
//     <TestWidget />
//   </React.StrictMode>,
// );
