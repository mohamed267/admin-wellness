import { IconButton, Text } from '@chakra-ui/react';
import If from 'common/If';

type PageProps = {
  offsetPage: number;
  page: number;
  setPage: any;
};

const Page = ({ offsetPage, page, setPage }: PageProps) => {
  return (
    <>
      <If condition={offsetPage !== page}>
        <IconButton
          aria-label={`page ${offsetPage} `}
          variant="whiteFill"
          onClick={() => {
            setPage(offsetPage);
          }}
          icon={<Text>{offsetPage}</Text>}
        />
      </If>

      <If condition={offsetPage === page}>
        <IconButton
          onClick={() => {
            setPage(offsetPage);
          }}
          aria-label={`page ${page} `}
          variant="primaryOutline"
          icon={<Text>{offsetPage}</Text>}
        />
      </If>
    </>
  );
};

Page.propTypes = {};

export default Page;
