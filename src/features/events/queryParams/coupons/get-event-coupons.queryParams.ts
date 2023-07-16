import { PaginationFilterQuery } from 'features/global/queryParams/pagination-filter-query';

export interface GetEvenCoupontQueryParam extends PaginationFilterQuery {
  eventId?: string;
}
