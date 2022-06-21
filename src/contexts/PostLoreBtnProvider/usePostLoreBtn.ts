import { useContext } from 'react';

import PostLoreBtnContext from './PostLoreBtnContext';

const UsePostLoreBtn = () => {
  const context = useContext(PostLoreBtnContext);

  return context;
};

export default UsePostLoreBtn;
