import { useEffect, useState } from 'react';
import useOption from './useOption';

enum Env {
  Production = 'production',
  Staging = 'staging',
  Sandbox = 'sandbox',
}

export default function useEnv() {
  const envType: any = useOption('env', {
    options: [Env.Production, Env.Staging, Env.Sandbox],
    defaultValue: Env.Sandbox,
  });
  const [env, setEnv] = useState<string>();

  useEffect(() => {
    let stale = false;
    setEnv(envType);

    return () => {
      stale = true;
    };
  }, [envType]);

  return env;
}
