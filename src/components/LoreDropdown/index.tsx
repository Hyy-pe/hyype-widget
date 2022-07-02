import { fetchCommunityLoreTags } from 'api/collection';
import { Drop } from 'components';
import { SortIcon } from 'components/Icons';
import { Spinner, SpinnerWrap } from 'components/PostLore/postLoreHeaderStyling';
import { FC, useEffect, useState } from 'react';

import { Container, LoreTypeButton, Option } from './loreDropdownStyling';
interface LoreDropdownProps {
  contractAddress: string;
  setLoreType: any;
  loreType: any;
  env: string;
}

const Dropdown: FC<LoreDropdownProps> = ({ contractAddress = '', setLoreType, loreType, env }) => {
  const nft = ''; // router.query?.nft || selectedNft || '';
  const [dropdown, setDropdown] = useState(false);
  const [loreTags, setLoreTags] = useState<Array<string>>([]);
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
    if (!contractAddress) return;

    try {
      setIsLoading(true);

      const getLoreTags = async () => {
        const loreTags: any = await fetchCommunityLoreTags({
          contractAddress,
          env,
        });

        setLoreTags(loreTags || []);
      };
      getLoreTags();
    } catch (error) {
      setLoreTags(DefaultDropdownOptions);
      console.log('err getCommunityLoreTags: ', error);
    }

    setIsLoading(false);
  }, [contractAddress]);

  if (isLoading) {
    return (
      <Container>
        <LoreTypeButton>
          <SortIcon />

          <SpinnerWrap>
            <Spinner color="#FF8162" size={16} />
          </SpinnerWrap>
        </LoreTypeButton>
      </Container>
    );
  }

  return (
    <Container>
      <LoreTypeButton
        onClick={() => {
          setDropdown(!dropdown);
        }}
      >
        <SortIcon />
        <span>{loreType}</span>
      </LoreTypeButton>

      <Drop show={dropdown} left="50px" onClose={() => setDropdown(false)} align="right">
        {loreTags?.map((tag, index) => {
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
