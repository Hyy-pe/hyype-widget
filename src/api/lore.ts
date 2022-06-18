import { BASE_API_URL, SANDBOX_API_URL } from 'constants/api';
const CLIENT_ID = 'dc5fa5fa9dd2ee590ec0011b7320b5d12ed1f0ad';

const URL_LORE = `${BASE_API_URL}/api/v1/lore`;

const headers = {
  'Content-Type': 'application/json',
};

export const getNonce = async ({ address, action }: { address: any; action: string }) => {
  const url = `${BASE_API_URL}/api/v1/user/public/request-nonce`;
  const payload = {
    address,
    action,
  };

  try {
    let nonceResp: any = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'client-id': CLIENT_ID,
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

export const getImgSign = async ({
  fileType,
  fileWidth,
  fileHeight,
}: {
  fileType: any;
  fileWidth: any;
  fileHeight: any;
}) => {
  const url = `${BASE_API_URL}/api/v1/public/lore/image/signed-upload-request`;
  const payload = {
    fileType,
    fileWidth,
    fileHeight,
  };

  try {
    let resp: any = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'client-id': CLIENT_ID,
      },
      body: JSON.stringify(payload),
    });

    return await resp.json();
  } catch (error) {
    console.log('err getImgSign: ', error);
  }
};

export const postLore = async ({ payload }: { payload: any }) => {
  try {
    const url = `${URL_LORE}/create-lore`;

    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'client-id': CLIENT_ID,
      },
      body: JSON.stringify(payload),
    });

    return await resp.json();
  } catch (error) {
    console.log('err postLore: ', error);
  }
};
