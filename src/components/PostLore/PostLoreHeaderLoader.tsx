import {
  DescLong,
  DescShort,
  DescWrapLoader,
  HeaderImg,
  HeaderWrap,
  ImgLoader,
} from './postLoreHeaderStyling';

export default function PostLoreHeaderLoader() {
  return (
    <HeaderWrap>
      <HeaderImg>
        <ImgLoader />
      </HeaderImg>

      <DescWrapLoader>
        <DescShort />
        <DescLong />
      </DescWrapLoader>
    </HeaderWrap>
  );
}
