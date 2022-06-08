export const getNftImgSrc = (data: any) => {
  const image =
    data?.metadata?.cachedMedia?.imageUrl ||
    data?.metadata?.cachedMedia?.videoThumbnail ||
    data?.metadata?.imageUrl ||
    data?.metadata?.videoThumbnail ||
    '';

  return image;
};
