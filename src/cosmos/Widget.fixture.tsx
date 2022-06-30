import { useValue } from 'react-cosmos/fixture';

import { defaultTheme, HyypeWidget } from './../index';
import useEnv from './useEnv';
import useWeb3Provider from './useWeb3Provider';

function Fixture() {
  const web3Provider = useWeb3Provider();
  const [theme, setTheme] = useValue('theme', { defaultValue: { ...defaultTheme } });

  // const [contractAddress] = useValue('contractAddress', {
  //   defaultValue: '',
  // });
  // const [tokenId] = useValue('tokenId', { defaultValue: '' });
  // const [clientId] = useValue('clientId', {
  //   defaultValue: '',
  // });
  // const [platformSpecificSigningMessage] = useValue('platformSpecificSigningMessage', {
  //   defaultValue: '',
  // });

  /**
   * set default values to make the developing process faster
   */

  const [contractAddress] = useValue('contractAddress', {
    defaultValue: '0xa76ebc37e23bc7f20d62156ad88f2f29bf1e0d3a',
  });

  const [tokenId] = useValue('tokenId', { defaultValue: '233' });

  const [clientId] = useValue('clientId', {
    defaultValue: 'dc5fa5fa9dd2ee590ec0011b7320b5d12ed1f0ad',
  });

  const platformSpecificSigningMessage =
    'Post a lore on Hyype by verifying your wallet address. One time code : ';

  // -----------------------------

  const env = useEnv();

  // optional props
  const [width] = useValue('width', { defaultValue: '720' });
  const [tokenName] = useValue('tokenName', { defaultValue: '' });
  const [tokenThumbnail] = useValue('tokenThumbnail', { defaultValue: '' });
  const [header] = useValue('header', { defaultValue: '' });
  const [subHeader] = useValue('subHeader', { defaultValue: '' });
  const [callToAction] = useValue('callToAction', { defaultValue: '' });

  return (
    <HyypeWidget
      web3Provider={web3Provider}
      contractAddress={contractAddress}
      tokenId={tokenId}
      clientId={clientId}
      platformSpecificSigningMessage={platformSpecificSigningMessage}
      env={env}
      theme={theme}
      width={width}
      tokenName={tokenName}
      tokenThumbnail={tokenThumbnail}
      header={header}
      subHeader={subHeader}
      callToAction={callToAction}
    />
  );
}

export default <Fixture />;
