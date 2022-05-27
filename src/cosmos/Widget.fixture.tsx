import { useValue } from 'react-cosmos/fixture'
import { HyypeWidget, defaultTheme } from './../index';

import useJsonRpcEndpoint from './useJsonRpcEndpoint';
import useProvider from './useProvider';


function Fixture() {
  const jsonRpcEndpoint = useJsonRpcEndpoint();
  const provider = useProvider();
  const [theme, setTheme] = useValue('theme', { defaultValue: { ...defaultTheme } })


  return <HyypeWidget name="sajib" jsonRpcEndpoint={jsonRpcEndpoint} provider={provider} theme={theme} />;
}

export default <Fixture />;
