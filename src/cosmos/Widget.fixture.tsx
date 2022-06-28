import { useValue } from 'react-cosmos/fixture';

import { defaultTheme, HyypeWidget } from './../index';
import useEnv from './useEnv';
import useWeb3Provider from './useWeb3Provider';

function Fixture() {
  // const jsonRpcEndpoint = useJsonRpcEndpoint();
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
  const [width] = useValue('width', { defaultValue: '720' });

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
    />
  );
}

export default <Fixture />;
