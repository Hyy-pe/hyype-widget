import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Widget from './Widget';
import TestWidget from './TestWidget';
import reportWebVitals from './reportWebVitals';
import { WidgetProps } from './Widget';

// exports
export { SupportedChainId } from 'constants/chains';



export function HyypeWidget(props: WidgetProps) {
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
