import { PRODUCTION_API_URL, SANDBOX_API_URL, STAGING_API_URL } from 'constants/api';

export { PRODUCTION_API_URL, SANDBOX_API_URL, STAGING_API_URL } from 'constants/api';

export const getNftImgSrc = (data: any) => {
  const image =
    data?.metadata?.cachedMedia?.imageUrl ||
    data?.metadata?.cachedMedia?.videoThumbnail ||
    data?.metadata?.imageUrl ||
    data?.metadata?.videoThumbnail ||
    '';

  return image;
};

export const getBaseApiUrl = (env: string) => {
  if (env === 'production') {
    return PRODUCTION_API_URL;
  } else if (env === 'staging') {
    return STAGING_API_URL;
  } else if (env === 'sandbox') {
    return SANDBOX_API_URL;
  } else {
    return '';
  }
};
