export interface BookItem {
  cover: string;
  title: string;
  price: number;
  authors: string[];
  isPublic: boolean;
}

export interface CategoryGroup {
  name: string;
  icon: string;
  categoryIds: readonly number[];
}
