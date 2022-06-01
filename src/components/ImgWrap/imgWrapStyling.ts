import styled, { css } from 'styled-components';
import { ImgWrapProps } from './index';

export const ImgContainer = styled.div`
  align-items: stretch;
  background-color: #d8d8d8;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  height: 64px;
  overflow: hidden;
  position: relative;
  width: 64px;

  ${(props: ImgWrapProps) =>
    props.imgUrl &&
    css`
      background-image: url(${props.imgUrl});
      background-position: center;
      background-size: cover;
    `};
`;
