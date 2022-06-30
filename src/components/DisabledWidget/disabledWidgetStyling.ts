import styled from 'styled-components';

export const DisabledDropdownWrap = styled.div`
  padding: 24px 20px 20px 20px;
  opacity: 0.4;
  pointer-events: none;
`;

export const MsgListsHeader = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.secondaryColor};
  text-align: center;
  font-size: 14px;
`;

export const MsgInfoLists = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 14px;
  color: ${({ theme }) => theme.secondaryColor};
`;

export const MsgListItem = styled.li`
  flex-basis: 48%;
  line-height: 24px;
`;