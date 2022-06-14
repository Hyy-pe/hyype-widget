import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  min-height: 460px;
`;

export const MsgBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const MsgTitle = styled.h1`
  margin: 32px 0 16px 0;
  font-size: 20px;
  color: hsla(0, 0%, 0%, 1);
  font-weight: 500;
`;

export const MsgInfo = styled.p`
  margin: 0;
  font-size: 12px;
`;
