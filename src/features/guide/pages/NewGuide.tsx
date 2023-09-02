import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Stack,
} from '@chakra-ui/react';
import { useDirection } from 'hooks/useDirection';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import NewGuideForm from '../components/forms/NewGuideForm';

const NewGuide = () => {
  const { dir } = useDirection();
  return (
    <Stack py="30px">
      <Breadcrumb
        spacing="8px"
        separator={
          dir === 'rtl' ? (
            <BiChevronLeft color="gray.500" />
          ) : (
            <BiChevronRight color="gray.500" />
          )
        }
      >
        <BreadcrumbItem
          color="primary.500"
          textTransform="capitalize"
          fontSize="md"
        >
          <BreadcrumbLink>
            <Link to="/guides">
              <FormattedMessage id="guides" />
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage color="primary.500">
          <FormattedMessage id="newGuide" />
        </BreadcrumbItem>
      </Breadcrumb>

      {/* form guide creation  */}

      <NewGuideForm />
    </Stack>
  );
};

export default NewGuide;
