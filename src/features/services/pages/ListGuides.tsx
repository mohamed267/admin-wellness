import { Breadcrumb, BreadcrumbItem, HStack, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import TableComponent from 'components/table/Table';
import { BlogListEntity } from '../types';
import ExpendedBlogRow from '../components/table/ExpendedBlogRow';
import { blogsColumns } from '../variables/table';

const ListBlogs = () => {
  return (
    <Stack py="15px" spacing="10px">
      <HStack justifyContent="space-between">
        <Breadcrumb>
          <BreadcrumbItem color="primary.500">
            <Link to="/blogs">Blogs</Link>
          </BreadcrumbItem>
        </Breadcrumb>
        <HStack></HStack>
      </HStack>

      <TableComponent<BlogListEntity>
        name="blogs"
        // name="users"
        // selectRow={navigateOrderDetails}
        data={[]}
        tableColumns={blogsColumns}
        pageIndex={1}
        pageCount={1}
        paginated={true}
        ExpendedRow={ExpendedBlogRow}
        //
        // searching={setSearch}
        // detailsIcon={true}
      />
    </Stack>
  );
};

export default ListBlogs;
