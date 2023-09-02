import { BaseEntity } from 'features/global';

export type User = {
  createdAt: any;
  email: string;
  displayName: string;
  tickets: number;
  score: number;
  status: 'banned' | 'active';
} & BaseEntity;
