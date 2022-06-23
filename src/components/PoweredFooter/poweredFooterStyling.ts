import styled from 'styled-components';

export const PoweredFooterWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 12px 0 12px 0;
  font-size: 12px;
  color: ${({ theme }) => theme.foregroundColor4};
  background-color: ${({ theme }) => theme.foregroundColor2};
  opacity: 0.75;
`;
