import { BASE_API_URL, SANDBOX_API_URL } from 'constants/api';
const CLIENT_POST_MESSAGE =
  'Post a lore on Hyype by verifying your wallet address. One time code : ';
// const CLIENT_ID = 'dc5fa5fa9dd2ee590ec0011b7320b5d12ed1f0ad';
const clientId = 'dc5fa5fa9dd2ee590ec0011b7320b5d12ed1f0ad';

const URL_LORE = `${SANDBOX_API_URL}/api/v1/lore`;

const headers = {
  'Content-Type': 'application/json',
};

export const getNonce = async ({
  address,
  action,
}: {
  address: any;
  action: string;
}) => {
  const url = `${SANDBOX_API_URL}/api/v1/user/public/request-nonce`;
  const payload = {
    address,
    action,
  };

  try {
    let nonceResp: any = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'client-id': clientId,
      },
      body: JSON.stringify(payload),
      // body: JSON.stringify(payload),
    });
    nonceResp = await nonceResp.json();

    return nonceResp?.nonce;
  } catch (error) {
    console.log('err fetchNftDetails: ', error);
  }
};

export const postLore = async ({ payload }: { payload: any }) => {
  try {
    const url = `${URL_LORE}/create-lore`;

    const postLoreResp = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'client-id': clientId,
      },
      body: JSON.stringify(payload),
    });

    return await postLoreResp.json();
  } catch (error) {
    console.log('err postLore: ', error);
  }
};
