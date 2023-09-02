export type Meta = {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
};

export type Media = {
  id: string;
  type: string;
  url: string;
  isNew: boolean;
};

export type BaseEntity = {
  id: string;
};

export type EventCategory = {
  id: string;
  name: string;
  image: string;
};
