import { ChevronDown } from 'components/Icons';
import styled from 'styled-components';

export const Container = styled.div`
  font-size: 14px;
  height: 36px;
  margin-bottom: 36px;
  max-width: 200px;
  position: relative;
  z-index: 5;
`;

export const OptionsWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 9px;
  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.08);
  padding: 5px 0;
  position: absolute;
  right: 0;
  top: calc(100% + 14px);
  & a {
    color: inherit;
    text-decoration: none;
  }
`;

export const Option = styled.div`
  cursor: pointer;
  display: flex;
  font-weight: 500;
  padding: 10px 17px;
  &:hover {
    background: #80808014;
  }
`;
export const ChevronDownIcon = styled(ChevronDown)`
  position: absolute;
  right: 10px;
`;
export const DropdownIconContainer = styled.div`
  margin-right: 20px;
  width: 20px;
`;
export const Image = styled.img`
  height: 33px;
  width: 33px;
`;

export const LoreTypeButton = styled.button`
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid #666666;
  border-radius: 88px;
  cursor: pointer;
  height: 36px;
  padding: 0 16px;
  transition: all 0.4s;

  &:hover {
    background: radial-gradient(circle, transparent 1%, rgb(255 255 255) 1%) center center / 15000%
      rgb(255 255 255);
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 5px;
  }
  &:active {
    background-color: #ddd;
    background-size: 100%;
    transition: background 0s;
  }

  svg {
    margin-right: 11px;
  }
`;
