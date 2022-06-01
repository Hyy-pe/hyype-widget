// import { useRouter } from 'next/router';
import { Drop } from 'components';
// import { getLoreTags, getNftData } from '../../../pages/api/data';
import { FC, useEffect, useState } from 'react';

import { Container, LoreTypeButton, Option } from './loreDropdownStyling';
// import { LoadingAnimation } from 'components/FormFields/commonStyling';

interface LoreDropdownProps {
  setLoreType: any;
  loreType: any;
  slug: string;
  selectedNft?: any;
}

const Dropdown: FC<LoreDropdownProps> = ({ setLoreType, loreType, slug, selectedNft }) => {
  // const router = useRouter();

  const nft = ''; // router.query?.nft || selectedNft || '';
  const [dropdown, setDropdown] = useState(false);
  const [collectionTags, setCollectionTags] = useState(['']);
  const [isLoading, setIsLoading] = useState(false);

  const DefaultDropdownOptions = [
    'Backstory',
    'Collector Statement',
    'Derivative',
    'Illustration',
    'Spotlight',
    'Meme',
  ];

  useEffect(() => {
    setCollectionTags(DefaultDropdownOptions);
  }, [slug]);

  if (isLoading) {
    return (
      <Container>
        <LoreTypeButton>
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 4.66667H8V3.33333H0V4.66667ZM0 0V1.33333H12V0H0ZM0 8H4V6.66667H0V8Z"
              fill="#666666"
            />
          </svg>
          {/* <LoadingAnimation size={16} /> */}
        </LoreTypeButton>
      </Container>
    );
  }

  console.log('>>> collectionTags: ', collectionTags);

  return (
    <Container>
      <LoreTypeButton
        onClick={() => {
          setDropdown(!dropdown);
        }}
      >
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 4.66667H8V3.33333H0V4.66667ZM0 0V1.33333H12V0H0ZM0 8H4V6.66667H0V8Z"
            fill="#666666"
          />
        </svg>
        {loreType}
      </LoreTypeButton>
      <Drop show={dropdown} onClose={() => setDropdown(false)} align="right">
        {collectionTags.map((tag, index) => {
          return (
            <Option
              key={`dropdown_${index}`}
              onClick={() => {
                setLoreType(tag);
                setDropdown(false);
              }}
            >
              {tag}
            </Option>
          );
        })}
      </Drop>
    </Container>
  );
};

export default Dropdown;
