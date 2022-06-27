import { useValue } from 'react-cosmos/fixture';

import { defaultTheme, HyypeWidget } from './../index';
import useEnv from './useEnv';
import useWeb3Provider from './useWeb3Provider';

function Fixture() {
  // const jsonRpcEndpoint = useJsonRpcEndpoint();
  const web3Provider = useWeb3Provider();
  const [theme, setTheme] = useValue('theme', { defaultValue: { ...defaultTheme } });
  const [contractAddress] = useValue('contractAddress', {
    defaultValue: '0xa76ebc37e23bc7f20d62156ad88f2f29bf1e0d3a',
  });
  const [tokenId] = useValue('tokenId', { defaultValue: '233' });
  const [clientId] = useValue('clientId', {
    defaultValue: 'dc5fa5fa9dd2ee590ec0011b7320b5d12ed1f0ad',
  });
  const env = useEnv();
  const [width] = useValue('width', { defaultValue: '720' });

  return (
    <HyypeWidget
      web3Provider={web3Provider}
      contractAddress={contractAddress}
      tokenId={tokenId}
      clientId={clientId}
      env={env}
      theme={theme}
      width={width}
    />
  );
}

export default <Fixture />;
