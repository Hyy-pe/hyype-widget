import styled from 'styled-components/macro';

export const WidgetWrapper = styled.div<{ width?: string | number }>`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  font-variant: none;
  min-width: 320px;
  margin: 16px; // delete it
  padding: 28px 20px;

  width: ${({ width }) => width && (isNaN(Number(width)) ? width : `${width}px`)};
  background-color: ${({ theme }) => theme.container};
  border: 1px solid rgba(0, 0, 0, 0.75);
  border-radius: ${({ theme }) => theme.borderRadius}px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.primary};
  -moz-osx-font-smoothing: grayscale;

  * {
  box-sizing: border-box;
  font-family: ${({ theme }) =>
    typeof theme.fontFamily === 'string' ? theme.fontFamily : theme.fontFamily.font};

  @supports (font-variation-settings: normal) {
    font-family: ${({ theme }) =>
      typeof theme.fontFamily === 'string' ? undefined : theme.fontFamily.variable};
  }
`;

export const Button = styled.button`
  height: 36px;
  border-radius: 18px;ß
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

export const Alert = styled.p`
  color: red;
`;