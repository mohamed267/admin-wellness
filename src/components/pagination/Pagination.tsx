import { HStack, Icon, IconButton, LinkBox, Text } from '@chakra-ui/react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import If from 'common/If';
import Page from './Page';
import { useDirection } from 'hooks/useDirection';
import { Link } from 'react-router-dom';

type PaginationProps = {
  page: number;
  pages: number;
};

const Pagination = ({ page, pages }: PaginationProps) => {
  const { dir } = useDirection();
  // const handleChangePage = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setPage(pageRef.current.value);
  // };

  return (
    <HStack gap={'5px'}>
      <LinkBox>
        <Link to={`?page=${page - 1}`}>
          <IconButton
            aria-label="previous icon"
            variant="whiteFill"
            icon={
              <Icon
                as={dir === 'ltr' ? AiOutlineLeft : AiOutlineRight}
                cursor={'pointer'}
              />
            }
          />
        </Link>
      </LinkBox>

      <If condition={page - 2 > 1}>
        <>
          <Page offsetPage={1} page={page} />

          <IconButton
            aria-label={`page ${1} `}
            variant="whiteFill"
            icon={<Text>...</Text>}
          />
          {[page, page + 1, page + 2].map((offsetPage: number, key: any) => (
            <If key={key} condition={offsetPage <= pages}>
              <Page offsetPage={offsetPage} page={page} />
            </If>
          ))}
        </>
      </If>

      <If condition={page - 2 <= 1}>
        <>
          {[1, 2, 3].map((offsetPage: number, key: any) => (
            <If key={key} condition={offsetPage <= pages}>
              <Page offsetPage={offsetPage} page={page} />
            </If>
          ))}
        </>
      </If>

      <If condition={(page + 2 < pages || page - 2 <= 1) && pages > 3}>
        <>
          <IconButton
            aria-label={`page ${1} `}
            variant="whiteFill"
            icon={<Text>...</Text>}
          />
          <Page offsetPage={pages} page={page} />
        </>
      </If>

      <LinkBox>
        <Link to={`?page=${page + 1}`}>
          <IconButton
            aria-label="next page icon"
            variant="whiteFill"
            icon={
              <Icon
                as={dir === 'ltr' ? AiOutlineRight : AiOutlineLeft}
                cursor="pointer"
              />
            }
          />
        </Link>
      </LinkBox>
    </HStack>
  );
};

export default Pagination;
