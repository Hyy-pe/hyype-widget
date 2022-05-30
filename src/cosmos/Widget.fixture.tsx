import { useValue } from 'react-cosmos/fixture'
import { HyypeWidget, defaultTheme } from './../index';

import useJsonRpcEndpoint from './useJsonRpcEndpoint';
import useWeb3Provider from './useWeb3Provider';


function Fixture() {
  // const jsonRpcEndpoint = useJsonRpcEndpoint();
  const web3Provider = useWeb3Provider();
  const [theme, setTheme] = useValue('theme', { defaultValue: { ...defaultTheme } })


  return <HyypeWidget name="sajib" web3Provider={web3Provider} theme={theme} />;
}

export default <Fixture />;
