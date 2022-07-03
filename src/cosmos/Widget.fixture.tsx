import { useValue } from 'react-cosmos/fixture';

import { defaultTheme, HyypeWidget } from './../index';
import useEnv from './useEnv';
import useWeb3Provider from './useWeb3Provider';

function Fixture() {
  const web3Provider = useWeb3Provider();
  const [theme, setTheme] = useValue('theme', { defaultValue: { ...defaultTheme } });

  const [contractAddress] = useValue('contractAddress', {
    defaultValue: '',
  });
  const [tokenId] = useValue('tokenId', { defaultValue: '' });
  const [clientId] = useValue('clientId', {
    defaultValue: '',
  });
  const [platformSpecificSigningMessage] = useValue('platformSpecificSigningMessage', {
    defaultValue: '',
  });

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
