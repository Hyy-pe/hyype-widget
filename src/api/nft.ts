import { BASE_API_URL } from 'constants/api';

const URL_TOKEN = `${BASE_API_URL}/api/v1/token`;

export const fetchNftDetails = async ({
  contractAddress,
  tokenId,
}: {
  contractAddress: any;
  tokenId: string;
}) => {
  const url = `${URL_TOKEN}/${contractAddress}/${tokenId}?refresh=false`;

  try {
    let nft = await fetch(url);
    nft = await nft.json();

    return nft || {};
  } catch (error) {
    console.log('err fetchNftDetails: ', error);
  }
};
