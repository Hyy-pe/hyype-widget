import styled, { css } from 'styled-components';
import { ImgWrapProps } from './index';

export const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
  overflow: hidden;
  background-color: #d8d8d8;
  display: flex;
  align-items: stretch;
  padding-top: 100%;

  ${(props: ImgWrapProps) =>
    props.imgUrl &&
    css`
      background-image: url(${props.imgUrl});
      background-size: cover;
      background-position: center;
      padding-top: 100%;
    `};
`;
