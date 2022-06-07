import { useValue } from 'react-cosmos/fixture';
import { HyypeWidget, defaultTheme } from './../index';

import useJsonRpcEndpoint from './useJsonRpcEndpoint';
import useWeb3Provider from './useWeb3Provider';

function Fixture() {
  // const jsonRpcEndpoint = useJsonRpcEndpoint();
  const web3Provider = useWeb3Provider();
  const [theme, setTheme] = useValue('theme', { defaultValue: { ...defaultTheme } });
  const [contractAddress] = useValue('contractAddress', {
    defaultValue: '0x8a90cab2b38dba80c64b7734e58ee1db38b8992e',
  });
  const [tokenId] = useValue('tokenId', { defaultValue: '6483' });
  const [clientId] = useValue('clientId', { defaultValue: '' });
  const [width] = useValue('width', { defaultValue: '720' });

  return (
    <HyypeWidget
      web3Provider={web3Provider}
      contractAddress={contractAddress}
      tokenId={tokenId}
      clientId={clientId}
      theme={theme}
      width={width}
    />
  );
}

export default <Fixture />;
