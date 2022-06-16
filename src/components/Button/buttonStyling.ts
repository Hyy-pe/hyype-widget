import styled, { css } from 'styled-components';

interface ButtonProps {
  disabled?: boolean;
}

const BaseBtnStyles = css`
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  height: 40px;
  width: 240px;
`;

export const BtnWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PrimaryBtn = styled.button`
  ${BaseBtnStyles}

  background-color: hsla(12, 97%, 65%, 1);
  color: hsla(0, 0%, 100%, 1);

  ${(props: ButtonProps) =>
    props.disabled &&
    `
    cursor: not-allowed;
    opacity: 0.7;
    `}
`;

export const LoadingIcon = styled.div`
  display: inline-flex;
  margin-right: 12px;
  align-self: center;
`;
