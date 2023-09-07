import HCollapse from 'common/Transitions/HorizentalCollapse';
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useDisclosure,
} from '@chakra-ui/react';
import Switcher from 'common/Switcher';
import { BsSearch } from 'react-icons/bs';
import { useIntl } from 'react-intl';
import { useState } from 'react';
// import debounce from 'lodash.debounce';
// import { useSearchContext } from 'contexts/searchContext';

type SearchBarProps = {
  width?: number | string;
  placeholder?: string;
};

const SearchBar = ({ width = '60%', placeholder = '' }: SearchBarProps) => {
  const [currentSearch, setCurrentSearch] = useState('');
  // const { search, setSearch } = useSearchContext();

  // const handleChageSearch = () => {
  //   setSearch(currentSearch);
  // };

  // const debouncedResults = useMemo(() => {
  //   return debounce(handleChageSearch, 300);
  // }, [currentSearch]);

  const handleChangeCurrentSearch = (e: any) => {
    setCurrentSearch(e.target.value);
  };

  // useEffect(() => {
  //   debouncedResults();
  // }, [currentSearch]);

  const int1 = useIntl();
  const {
    getButtonProps,
    onOpen: onSearchFocus,
    onClose: onSearchClose,
  } = useDisclosure();
  return (
    <HCollapse width={width} hiddenWidth={'100px'} isOpen={true}>
      <InputGroup
        bg="white"
        borderRadius="3xl"
        overflow={'hidden'}
        variant="search"
        h="45px"
        position={'relative'}
        boxShadow="-1px 5px 11px 1px #ddd9d9"
      >
        <Switcher
          Left={InputLeftElement}
          Right={InputRightElement}
          style={{
            w: '50px',
            h: '100%',
          }}
        >
          <IconButton
            aria-label="search product"
            variant={'whiteFill'}
            icon={<BsSearch />}
            borderRadius="xl"
            fontSize={'lg'}
            h="100%"
            w="100%"
            {...getButtonProps()}
          />
        </Switcher>
        <Input
          ps="50px"
          borderRadius="xl"
          h="100%"
          onFocus={onSearchFocus}
          onBlur={onSearchClose}
          onChange={handleChangeCurrentSearch}
          value={currentSearch}
          placeholder={
            placeholder ? int1.formatMessage({ id: placeholder }) : ''
          }
        />
      </InputGroup>
    </HCollapse>
  );
};

export default SearchBar;
