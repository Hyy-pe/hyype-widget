import styled, { css } from 'styled-components';

const BaseBtnStyles = css`
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  height: 40px;
  width: 240px;
`;

export const PrimaryBtn = styled.button`
  ${BaseBtnStyles}

  background-color: hsla(12, 97%, 65%, 1);
  color: hsla(0, 0%, 100%, 1);
`;
