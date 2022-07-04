import styled, { css, keyframes } from 'styled-components';

interface DropProps {
  show: boolean;
  minWidth?: any;
  top?: any;
  bottom?: any;
  left?: any;
  right?: any;
  arrowType?: string;
  align?: string;
  pad?: string | number;
  zIndex?: number;
  theme: {
    device: {
      laptop: string;
    };
  };
}

export const arrowCommonStyle = css`
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  box-shadow: 0 16px 10px -17px rgba(0, 0, 0, 0.5);
  content: '';
  display: block;
  position: absolute;
  transform: translateX(-50%);
`;
export const arrowHorizontalCommonStyle = css`
  border-bottom: 8px solid transparent;
  border-top: 8px solid transparent;
  box-shadow: 0 16px 10px -17px rgba(0, 0, 0, 0.5);
  content: '';
  display: block;
  position: absolute;
  transform: translateY(-50%);
`;

const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-14px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideFromRight = keyframes`
  0% {
    opacity: 0;
    transform: translate(14px, -50%);
  }
  100% {
    opacity: 1;
    transform: translate(0, -50%);
  }
`;

const slideDownCenter = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%,-14px);
  } 
  100% {
    opacity: 1;
    transform: translate(-50%,0); 
  }
`;

export const OptionsWrapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: 9px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  display: none;
  min-width: calc(100% + 33px);
  padding: 5px 0;
  position: absolute;
  top: calc(100% + 14px);
  & a {
    color: inherit;
    text-decoration: none;
  }
  transition: all 0.5s ease;
  visibility: hidden;
  z-index: 1;

  ${(props: DropProps) =>
    props.show &&
    css`
      animation: ${props?.align === 'center'
          ? slideDownCenter
          : props?.align === 'centerLeft'
          ? slideFromRight
          : slideDown}
        0.2s ease-out;
      display: block;
      opacity: 1;
      transform: ${props?.align === 'centerLeft' ? 'translate(0, 0)' : 'translate(-50%, 0)'};
      transition: all 0.5s ease;
      visibility: visible;
    `}
  ${(props: DropProps) =>
    props.minWidth &&
    css`
      min-width: ${props.minWidth};
    `}
  ${(props: DropProps) =>
    props.top &&
    css`
      bottom: unset;
      top: ${props.top};
    `} 
  ${(props: DropProps) =>
    props.bottom &&
    css`
      bottom: ${props.bottom};
      top: unset;
    `}   
  ${(props: DropProps) =>
    props.left &&
    css`
      left: ${props.left};
      right: unset;
    `}
  ${(props: DropProps) =>
    props.right &&
    css`
      left: unset;
      right: ${props.right};
    `}
  ${(props: DropProps) =>
    props.pad &&
    css`
      padding: ${props.pad}px;
    `}  
  ${(props: DropProps) =>
    props.align === 'right' &&
    css`
      left: unset;
      right: 0;
      transform: translate(0, 0);
    `}    
  ${(props: DropProps) =>
    props.align === 'center' &&
    css`
      left: 50%;
      right: unset;
    `}
  ${(props: DropProps) =>
    props.align === 'left' &&
    css`
      left: 0;
      right: unset;
      transform: translate(0, 0);
    `} 
    ${(props: DropProps) =>
    props.align === 'centerLeft' &&
    css`
      left: unset;
      right: 100%;
      top: 50%;
      transform: translate(0, -50%);
    `}     
  ${(props: DropProps) =>
    props.zIndex &&
    css`
      z-index: ${props.zIndex};
    `}    
  &:before {
    ${(props: DropProps) =>
      props.arrowType === 'top' &&
      css`
        ${arrowCommonStyle}

        border-bottom: 8px solid white;
        left: ${props.align === 'right' ? `calc(100% - 11px)` : '50%'};
        top: -8px;
      `}

    ${(props: DropProps) =>
      props.arrowType === 'bottom' &&
      css`
        ${arrowCommonStyle}

        border-top: 8px solid white;
        bottom: -8px;
        left: ${props.align === 'right' ? `calc(100% - 11px)` : '50%'};
      `}
${(props: DropProps) =>
      props.arrowType === 'right' &&
      css`
        ${arrowHorizontalCommonStyle}

        border-left: 8px solid white;
        right: -8px;
        top: 50%;
        transform: translateY(-50%);
      `}
  }
`;
