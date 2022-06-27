export interface Colors {
  // surface
  backgroundColor: string;

  // text
  foregroundColor: string;
  activeColor: string;
  buttonTextColor: string;
  highlightColor: string;

  // state
  // active: string;
  // success: string;
  // warning: string;
  // error: string;

  // extra colors
  secondaryColor: string;
  foregroundColor2: string;
  buttonTextColor2: string;
  highlightColor2: string;
}

export type Color = keyof Colors;

export interface Attributes {
  borderRadius: boolean | number;
  borderColor: string;
  fontFamily:
    | string
    | {
        font: string;
        variable: string;
      };
  // fontFamilyCode: string;
}

export interface Theme extends Partial<Attributes>, Partial<Colors> {}

export interface ComputedTheme extends Omit<Attributes, 'borderRadius'>, Colors {
  borderRadius: number;
  onHover: (color: string) => string;
}

declare module 'styled-components/macro' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ComputedTheme {}
}
