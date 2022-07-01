import { SpinnerIcon } from 'components/Icons';
import styled, { keyframes } from 'styled-components';

type SpinnerColor = {
  color?: string;
};

export const HeaderWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px 20px 20px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

export const HeaderImg = styled.div`
  margin-right: 22px;
`;

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderInfo = styled.div`
  color: ${({ theme }) => theme.secondaryColor};
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 12px;
`;

export const Header = styled.div``;

// loader styles

export const loading = keyframes`
  100% {
    transform: translateX(100%);
  }
`;

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const ImgLoader = styled.div`
  width: 64px;
  height: 64px;
  position: relative;
  overflow: hidden;
  // border: 1px solid ${({ theme }) => theme.buttonTextColor};
  border-radius: ${({ theme }) => theme.borderRadius}px;
  background: ${({ theme }) => theme.foregroundColor2};
  z-index: 2;

  &:after {
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transform: translateX(-100%);
    width: 100%;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(transparent),
      color-stop(${({ theme }) => theme.buttonTextColor2}),
      to(transparent)
    );

    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.buttonTextColor2},
      transparent
    );

    /* Adding animation */
    animation: ${loading} 0.8s infinite;
    top: 0;
    left: 0;
  }
`;

export const DescWrapLoader = styled.div`
  width: 25%;

  > div {
    margin-bottom: 8px;
  }
`;

export const DescShort = styled.div`
  width: 70%;
  background-color: ${({ theme }) => theme.highlightColor2};
  height: 20px;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.foregroundColor2};
  border-radius: ${({ theme }) => theme.borderRadius}px;

  &:after {
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(transparent),
      color-stop(${({ theme }) => theme.buttonTextColor2}),
      to(transparent)
    );

    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.buttonTextColor2},
      transparent
    );

    /* Adding animation */
    animation: ${loading} 0.8s infinite;
    top: 0;
    left: 0;
  }
`;

export const DescLong = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 17px;
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius}px;
  background: ${({ theme }) => theme.foregroundColor2};

  &:after {
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(transparent),
      color-stop(${({ theme }) => theme.buttonTextColor2}),
      to(transparent)
    );

    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.buttonTextColor2},
      transparent
    );

    /* Adding animation */
    animation: ${loading} 0.8s infinite;
    top: 0;
    left: 0;
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

export const SpinnerWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Spinner = styled(SpinnerIcon)`
  animation: ${rotate} 2s linear infinite;

  & circle {
    stroke: ${({ theme }) => theme.activeColor};
    stroke-linecap: round;
    animation: ${dash} 1.5s ease-in-out infinite;
    ${(props: SpinnerColor) =>
      props.color &&
      `
      stroke: ${props.color};
    `}
  }
`;
