import { mix, transparentize } from 'polished';
import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components/macro';

import type { Colors, ComputedTheme, Theme } from './styled';

// export * from './dynamic';
export * from './layer';
export type { Color, Colors, Theme } from './styled';
export * as ThemedText from './type';

const brandLight = 'hsl(331.3, 100%, 50%)';
export const brand = brandLight;

const stateColors = {
  active: 'hsl(215, 79%, 51.4%)',
  success: 'hsl(145, 63.4%, 41.8%)',
  warning: 'hsl(43, 89.9%, 53.5%)',
  error: 'hsl(0, 98%, 62.2%)',
};

export const lightTheme: Colors = {
  // surface
  backgroundColor: 'rgba(255, 255, 255, 1)', // white

  // text
  foregroundColor: 'rgba(0, 0, 0, 1)', // black - font color, border
  activeColor: 'rgba(252, 113, 79, 1)', // orange
  buttonTextColor: 'rgba(255, 255, 255, 1)', // white
  highlightColor: 'rgba(127, 127, 127, 0.08)', // gray

  // state
  // ...stateColors,

  // extra colors
  secondaryColor: 'rgba(0, 0, 0, 0.75)',
  foregroundColor2: 'hsla(0, 0%, 0%, 0.05)', // shimmer loader
  buttonTextColor2: 'hsla(0, 0%, 100%, 0.2)',
  highlightColor2: 'hsla(0, 0%, 84%, 1)',
};

// dark theme
// export const darkTheme: Colors = {
//   // surface
//   backgroundColor: '#E7E7E7', // 'hsla(0, 0%, 100%, 1)',

//   // text
//   foregroundColor: 'hsl(0,0%,0%)', // hsl(0,0%,0%,0.75)'
//   activeColor: 'hsla(12,97%,65%,1)',
//   buttonTextColor: 'hsla(0,0%,100%,1)',
//   highlightColor: 'hsla(0, 0%, 50%, 0.08)',

//   // state
//   ...stateColors,
// };

export const defaultTheme = {
  borderRadius: 8,
  borderColor: 'rgba(0, 0, 0, 0.75)',
  fontFamily: {
    font: '"Inter", sans-serif',
    variable: '"InterVariable", sans-serif',
  },
  // fontFamilyCode: 'IBM Plex Mono',
  ...lightTheme,
};

export function useSystemTheme() {
  const [systemTheme, setSystemTheme] = useState(lightTheme);
  // const [systemTheme, setSystemTheme] = useState(darkTheme);
  return systemTheme;
}

const ThemeContext = createContext<ComputedTheme>(toComputedTheme(defaultTheme));

interface ThemeProviderProps {
  theme?: Theme;
  children: ReactNode;
}

function toComputedTheme(theme: Required<Theme>): ComputedTheme {
  return {
    ...theme,
    borderRadius: Number(theme.borderRadius),
    // borderRadius: clamp(Number.isFinite(theme.borderRadius) ? (theme.borderRadius as number) : 0),
    onHover: (color: string) =>
      color === theme.activeColor
        ? transparentize(0.4, theme.activeColor)
        : mix(0.16, theme.activeColor, color),
  };

  function clamp(value: number) {
    return Math.min(Math.max(value, 0), 1);
  }
}

export function ThemeProvider({ theme, children }: ThemeProviderProps) {
  const contextTheme = useContext(ThemeContext);

  const value = useMemo(() => {
    return toComputedTheme({
      ...contextTheme,
      ...theme,
    } as Required<Theme>);
  }, [contextTheme, theme]);

  return (
    <ThemeContext.Provider value={value}>
      <StyledProvider theme={value}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
}
