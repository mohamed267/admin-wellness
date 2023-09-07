import { HStack, Icon, IconButton } from '@chakra-ui/react';
import DeleteBinTableIcon from 'assets/icons/table/DeleteBinTableIcon';
import { useDeleteGuideCategories } from 'features/guide/apis/categories/deleteGuideCategories';
import { useIntl } from 'react-intl';

type EventUtilsProps = {
  ids?: string[];
};

const GuideCategoryUtils = ({ ids = [] }: EventUtilsProps) => {
  const { mutate: deleteGuideCategoty } = useDeleteGuideCategories();
  const intl = useIntl();

  const deleteStyles =
    ids?.length > 0
      ? {
          fill: 'danger.500',
        }
      : {};
  const handleDeleteEvents = () => {
    deleteGuideCategoty(ids);
  };

  return (
    <HStack spacing="5px">
      <IconButton
        variant="grayTableUtils"
        aria-label={intl?.formatMessage({ id: 'deleteEventAction' })}
        border="none"
        isDisabled={false}
        {...deleteStyles}
        onClick={handleDeleteEvents}
        icon={
          <Icon fontSize="25px">
            <DeleteBinTableIcon />
          </Icon>
        }
      />
    </HStack>
  );
};

export default GuideCategoryUtils;
