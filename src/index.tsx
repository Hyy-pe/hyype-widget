import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Widget, { WidgetProps } from './containers/Widget';
export { SupportedChainId } from 'constants/chains';
export { defaultTheme, lightTheme } from 'theme';
export type { Theme } from 'theme';

export function HyypeWidget(props: WidgetProps) {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <Widget {...props} />
    </React.StrictMode>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  /* editor js */
  .ce-block__content,
  .ce-toolbar__content {
    /* max-width: calc(100% - 75px) !important; */
    margin: 0;
  }
  .cdx-block {
    max-width: calc(100%) !important;
  }

  .codex-editor__loader {
    display: none !important;
  }
`;
