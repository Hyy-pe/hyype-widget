import styled, { css, keyframes } from 'styled-components';
import { SpinnerIcon } from 'components/Icons';

type SpinnerColor = {
  color?: string;
};

export const HeaderWrap = styled.div`
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: row;
  padding: 24px 20px 20px 20px;
`;

export const HeaderImg = styled.div`
  margin-right: 22px;
`;

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderInfo = styled.div`
  color: rgba(0, 0, 0, 0.75);
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  margin-bottom: 4px;
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
  border: 1px solid #fff;
  border-radius: 8px;
  background: hsla(0, 0%, 0%, 0.05);
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
      color-stop(rgba(255, 255, 255, 0.3)),
      to(transparent)
    );

    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    // background: linear-gradient(90deg, transparent, red, transparent);

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
  background-color: #d8d8d8;
  height: 20px;
  position: relative;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 8px;

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
      color-stop(rgba(255, 255, 255, 0.2)),
      to(transparent)
    );

    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);

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
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.05);

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
      color-stop(rgba(255, 255, 255, 0.2)),
      to(transparent)
    );

    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);

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
    stroke: #ff8162;
    stroke-linecap: round;
    animation: ${dash} 1.5s ease-in-out infinite;
    ${(props: SpinnerColor) =>
      props.color &&
      `
      stroke: ${props.color};
    `}
  }
`;
