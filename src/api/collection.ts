import { getBaseApiUrl } from 'utils';

export const fetchCommunityLoreTags = async ({
  contractAddress,
  env,
}: {
  contractAddress: any;
  env: string;
}) => {
  const url = `${getBaseApiUrl(env)}/api/v1/community/lore-tags?searchKey=${contractAddress}`;

  try {
    let nft = await fetch(url);
    nft = await nft.json();

    return nft || {};
  } catch (error) {
    console.log('err fetchNftDetails: ', error);
  }
};
