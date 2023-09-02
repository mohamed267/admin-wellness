export interface GuideCategory {
  id: number;
  name: string;
}

export interface GuideCategoryEntityResponse {
  id: number;
  name: string;
  imageUrl: string;
}

export interface GuideCategoryEntity {
  id: string;
  name: string;
  imageUrl: string;
  consultData: {
    id: string;
  };
}
