import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  min-height: 460px;
  height: 100%;
`;

export const MsgBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const MsgTitle = styled.h1`
  margin: 24px 0 16px 0;
  font-size: 20px;
  color: ${({ theme }) => theme.foregroundColor};
  font-weight: 500;
`;

export const MsgInfo = styled.p`
  margin: 0;
  font-size: 12px;
`;

export const ErrMsg = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.activeColor};
  text-align: center;
`;
