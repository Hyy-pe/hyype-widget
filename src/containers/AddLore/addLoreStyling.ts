import styled, { keyframes, css } from 'styled-components';

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
interface MainWrapProps {
  isCanon?: boolean;
}
export const Wrapper = styled.div`
  display: flex;
  width: 90%;
`;
export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  min-height: 100%;
  min-width: 500px;
`;
export const Sidebar = styled.aside`
  width: 329px;
  flex-shrink: 0;
  background-color: #f5f5f5;
  padding-top: 20px;
`;
export const MainWrap = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  justify-content: center;
`;
export const Main = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  padding: 28px 20px;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  border-radius: 14px;
  min-height: 65vh;
  width: 100%;
`;
export const Heading = styled.h1`
  font-size: 28px;
  letter-spacing: 0.62;
  font-weight: 600;
  margin-top: 61px;
  margin-bottom: 10px;
`;
export const Subheading = styled.h2`
  font-size: 14px;
  letter-spacing: 0.31px;
  color: #111;
  margin-top: 0;
  margin-bottom: 21px;
  font-weight: normal;
`;
export const HeadingWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const HeadingSecondary = styled.h2`
  font-size: 14px;
  letter-spacing: 0.31px;
  color: #111;
  margin-top: 0;
  margin-bottom: 21px;
  font-weight: normal;
`;

export const SeeWritingPrompt = styled(HeadingSecondary)`
  color: #ff8162;
  font-weight: 500;
  cursor: pointer;
  display: none;
`;

export const loading = keyframes`
  100% {
      transform: translateX(100%);
  }
`;

export const ImgContainer = styled.div`
  width: 192px;
  height: 192px;
  position: relative;
  border-radius: 29px;
  margin-top: 45px;
  overflow: hidden;
`;
export const EditorWrapper = styled.div`
  width: 80%;
  color: #000;
`;
export const EditorContainer = styled.div`
  background-color: inherit;
  word-break: break-word;
`;

export const ImageUploadArea = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  min-height: 40vh;
  font-size: 14px;
  max-width: 100%;
  margin-bottom: 24px;
  overflow: hidden;
  cursor: pointer;
  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 2px;
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  // justify-content: center;

  &::before {
    content: '';
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url('/images/designTop.svg');
    background-position: top right -25px;
    background-repeat: no-repeat;
    background-size: 277px;
    z-index: -1;
  }
`;

export const Content = styled.div`
  display: inline-flex;
  flex-flow: column nowrap;
  min-height: 90%;

  width: 65%;
  align-items: center;
  justify-content: flex-start;
  margin: 32px;
`;

export const RemoveButton = styled.div`
  position: absolute;
  top: 30px;
  right: 25px;
  background: #0000006b radial-gradient(circle, transparent 1%, #0000006b 1%) center/15000%;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 5px;
  border: 1px solid #666666;
  border-radius: 88px;
`;

export const UnderEditor = styled.div`
  width: 100%;
  background: rgba(216, 216, 216, 0.22);
  text-align: right;
  padding: 10px 16px;
`;

export const TextAreaWrapper = styled.div``;

export const ImageContainer = styled.img`
  max-width: 100%;
  height: auto;
`;

export const ImageUploadDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  height: 100%;
`;

export const EditorMain = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  padding: 28px 20px;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 14px;
  box-sizing: border-box;
  width: 65%;
  min-height: 95%;
  margin: 32px;
`;

export const PromptWrap = styled.div`
  width: 384px;
`;
