import styled from 'styled-components';

export const FooterWrap = styled.div`
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.secondaryColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px 20px 20px 20px;
`;

export const FooterLeft = styled.div`
  > p {
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.activeColor};
    letter-spacing: 0.308px;
  }
`;

export const FooterRight = styled.div``;
