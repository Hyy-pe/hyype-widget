import React from 'react';
import './index.scss';
import Widget, { WidgetProps } from './containers/Widget';

export { SupportedChainId } from 'constants/chains';
// export { darkTheme, defaultTheme, lightTheme } from 'theme';
export { defaultTheme, lightTheme } from 'theme';

export function HyypeWidget(props: WidgetProps) {
  return (
    <React.StrictMode>
      <Widget {...props} />
    </React.StrictMode>
  );
}
