import { getBaseApiUrl } from 'utils';

export const fetchNftDetails = async ({
  contractAddress,
  tokenId,
  env,
}: {
  contractAddress: any;
  tokenId: string;
  env: string;
}) => {
  const url = `${getBaseApiUrl(env)}/api/v1/token/${contractAddress}/${tokenId}?refresh=false`;

  try {
    let nft = await fetch(url);
    nft = await nft.json();

    return nft || {};
  } catch (error) {
    console.log('err fetchNftDetails: ', error);
  }
};
