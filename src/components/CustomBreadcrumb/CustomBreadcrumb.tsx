import { Breadcrumb, BreadcrumbItem, Text } from '@chakra-ui/react';
import If from 'common/If';
import { Link } from 'react-router-dom';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { useDirection } from 'hooks/useDirection';

type BreadcrumbItem = {
  link?: string;
  name: any;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

const CustomBreadcrumb = ({ items }: BreadcrumbProps) => {
  const { dir } = useDirection();
  return (
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
      {items?.map((item: BreadcrumbItem, key: any) => (
        <BreadcrumbItem key={key}>
          <If condition={item?.link}>
            <Link to={item?.link ?? ''}>
              <Text
                color="primary.500"
                _firstLetter={{ textTransform: 'capitalize' }}
              >
                {item?.name}
              </Text>
            </Link>
          </If>
          <If condition={!item?.link}>
            <Text
              color="primary.500"
              _firstLetter={{ textTransform: 'capitalize' }}
            >
              {item?.name}
            </Text>
          </If>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};

CustomBreadcrumb.propTypes = {};

export default CustomBreadcrumb;
