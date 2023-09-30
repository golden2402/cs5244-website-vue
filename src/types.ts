import { type Component, type DefineComponent } from "vue";

// "Resource" as in extracted from the web--may/may not represent our actual
// used types
export interface CategoryItemResource {
  categoryId: number;
  name: string;
}

export interface BookItem {
  title: string;
  author: string;
  description: string;
  price: number;
  isPublic: boolean;
  isFeatured: boolean;
  categoryId: number[];
}

export interface BookItemResource extends BookItem {
  bookId: number;
}

export interface CategoryGroup {
  name: string;
  icon: Component | DefineComponent;
  categoryIds: number[];
}
