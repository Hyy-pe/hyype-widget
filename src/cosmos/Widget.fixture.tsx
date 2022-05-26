import { HyypeWidget } from './../index';

import useJsonRpcEndpoint from './useJsonRpcEndpoint';
import useProvider from './useProvider';

function Fixture() {
  console.log('>>>> YESSS');

  const jsonRpcEndpoint = useJsonRpcEndpoint();
  const provider = useProvider();

  return <HyypeWidget name="sajib" jsonRpcEndpoint={jsonRpcEndpoint} provider={provider} />;
}

export default <Fixture />;
