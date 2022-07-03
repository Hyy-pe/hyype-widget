import styled from 'styled-components';

interface ImgContainer {
  theme: {
    colors: {
      cryptopunks: {
        bgColor: string;
      };
      chainfaces: {
        bgColor: string;
      };
      pfp: {
        bgColor: string;
      };
    };
  };
}

export const Wrapper = styled.div`
  display: flex;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const MainWrap: any = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  justify-content: center;

  ${(props: any) => props.minHeight && `min-height: ${props.minHeight}`}
`;

export const EditorWrapper = styled.div`
  width: 95%;
  color: #000;
`;

export const EditorMain = styled.div`
  background: ${({ theme }) => theme.backgroundColor};
  border-radius: 14px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  padding: 24px 20px 20px 20px;
  width: 100%;
`;

export const LoreDropdownWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
