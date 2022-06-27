import { getBaseApiUrl } from 'utils';

const CLIENT_ID = 'dc5fa5fa9dd2ee590ec0011b7320b5d12ed1f0ad';

const headers = {
  'Content-Type': 'application/json',
};

export const getNonce = async ({
  address,
  action,
  env,
}: {
  address: any;
  action: string;
  env: string;
}) => {
  const url = `${getBaseApiUrl(env)}/api/v1/user/public/request-nonce`;
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
  const url = `${getBaseApiUrl(env)}/api/v1/public/lore/image/signed-upload-request`;
  const payload = {
    fileType,
    fileWidth,
    fileHeight,
  };

  try {
    const resp: any = await fetch(url, {
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

export const postLore = async ({ payload, env }: { payload: any; env: string }) => {
  try {
    const url = `${getBaseApiUrl(env)}/api/v1/lore/create-lore`;

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
