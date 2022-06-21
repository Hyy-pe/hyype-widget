import { ReactNode, useState } from 'react';

import PostLoreBtnContext from './PostLoreBtnContext';

type PostLoreBtnProviderProps = {
  children: ReactNode;
};

function PostLoreBtnProvider({ children }: PostLoreBtnProviderProps) {
  const [title, setTitle] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const value = {
    title,
    setTitle,
    isLoading,
    setIsLoading,
    isDisabled,
    setIsDisabled,
  };

  return <PostLoreBtnContext.Provider value={value}>{children}</PostLoreBtnContext.Provider>;
}
