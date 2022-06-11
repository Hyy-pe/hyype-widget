import { BASE_API_URL } from 'constants/api';

const URL_COMMUNITY = `${BASE_API_URL}/api/v1/community`;

export const fetchCommunityLoreTags = async ({ contractAddress }: { contractAddress: any }) => {
  const url = `${URL_COMMUNITY}/lore-tags?searchKey=${contractAddress}`;

  try {
    let nft = await fetch(url);
    nft = await nft.json();

    return nft || {};
  } catch (error) {
    console.log('err fetchNftDetails: ', error);
  }
};
