import { type Component, type DefineComponent } from "vue";

export interface BookItem {
  cover: string;
  title: string;
  price: number;
  authors: string[];
  categories: number[];
  isPublic: boolean;
}

export interface CategoryGroup {
  name: string;
  icon: Component | DefineComponent;
  categoryIds: number[];
}
