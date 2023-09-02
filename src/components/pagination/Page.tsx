import { IconButton, LinkBox, Text } from '@chakra-ui/react';
import If from 'common/If';
import { Link } from 'react-router-dom';

type PageProps = {
  offsetPage: number;
  page: number;
};

const Page = ({ offsetPage, page }: PageProps) => {
  return (
    <>
      <LinkBox>
        <Link to={`?page=${offsetPage}`}>
          <If condition={offsetPage !== page}>
            <IconButton
              aria-label={`page ${offsetPage} `}
              variant="whiteFill"
              icon={<Text>{offsetPage}</Text>}
            />
          </If>

          <If condition={offsetPage === page}>
            <IconButton
              aria-label={`page ${page} `}
              variant="primaryOutline"
              icon={<Text>{offsetPage}</Text>}
            />
          </If>
        </Link>
      </LinkBox>
    </>
  );
};

Page.propTypes = {};

export default Page;
