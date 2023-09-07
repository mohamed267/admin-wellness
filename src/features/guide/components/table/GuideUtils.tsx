import { HStack, Icon, IconButton } from '@chakra-ui/react';
import DeleteBinTableIcon from 'assets/icons/table/DeleteBinTableIcon';
import { useDeleteGuides } from 'features/guide/apis/deleteGuides';
import { useIntl } from 'react-intl';

type GuideUtilsProps = {
  ids?: string[];
};

const GuideUtils = ({ ids = [] }: GuideUtilsProps) => {
  const { mutate: deleteGuides } = useDeleteGuides();
  const intl = useIntl();

  const deleteStyles =
    ids?.length > 0
      ? {
          fill: 'danger.500',
        }
      : {};
  const handleDeleteGuides = () => {
    deleteGuides(ids);
  };

  return (
    <HStack spacing="5px">
      <IconButton
        variant="grayTableUtils"
        aria-label={intl?.formatMessage({ id: 'deleteGuideAction' })}
        border="none"
        isDisabled={false}
        {...deleteStyles}
        onClick={handleDeleteGuides}
        icon={
          <Icon fontSize="25px">
            <DeleteBinTableIcon />
          </Icon>
        }
      />
    </HStack>
  );
};

export default GuideUtils;
