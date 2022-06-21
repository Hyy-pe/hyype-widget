import { createContext, Dispatch, SetStateAction } from 'react';

interface PostLoreBtnProps {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  isDisabled: boolean;
  setIsDisabled: Dispatch<SetStateAction<boolean>>;
  // onClick: any;
}

const PostLoreBtnDefaultValues: PostLoreBtnProps = {
  title: '',
  setTitle: () => '',
  isLoading: false,
  setIsLoading: () => false,
  isDisabled: false,
  setIsDisabled: () => false,
  // onClick: () => null,
};

export const PostLoreBtnContext = createContext<PostLoreBtnProps>(PostLoreBtnDefaultValues);

export default PostLoreBtnContext;
