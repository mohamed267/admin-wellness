import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Stack,
} from '@chakra-ui/react';
import { useDirection } from 'hooks/useDirection';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { FormattedMessage } from 'react-intl';
import { Link, useParams } from 'react-router-dom';
import { useGuide } from '../apis/getGuide';
import EditGuideForm from '../components/forms/EditGuideForm';

const EditGuide = () => {
  const { guideId } = useParams();
  const { dir } = useDirection();
  const { data: guideData } = useGuide({
    guideId,
  });
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

      {guideData && <EditGuideForm guide={guideData} />}
    </Stack>
  );
};

export default EditGuide;
