import React from 'react';
import './index.css';
import Widget, { WidgetProps } from './containers/Widget';
import reportWebVitals from './reportWebVitals';

// exports
export { SupportedChainId } from 'constants/chains';
export { darkTheme, defaultTheme, lightTheme } from 'theme';

export function HyypeWidget(props: WidgetProps) {
  return (
    <React.StrictMode>
      <Widget {...props} />
    </React.StrictMode>
  );
}

// reportWebVitals();
