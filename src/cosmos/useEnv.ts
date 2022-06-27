import { useEffect, useState } from 'react';
import useOption from './useOption';

enum Env {
  Production = 'production',
  Sandbox = 'sandbox',
}

export default function useEnv() {
  const envType: any = useOption('env', {
    options: [Env.Production, Env.Sandbox],
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
