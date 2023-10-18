import { type CategoryItemResource } from "@/types";

import { defineStore } from "pinia";
import { apiUrl } from "@/api";

export const useCategoryStore = defineStore("category", {
  state: () => ({ categoryList: new Map<number, string>() }),
  actions: {
    async fetchCategories() {
      const categoryListResponse = await fetch(`${apiUrl}/categories/`);
      const categoryListData = (await categoryListResponse.json()) as CategoryItemResource[];

      // use reference, so modifying in-place:
      const categoryList = this.categoryList;
      categoryList.clear();

      for (const { categoryId, name } of categoryListData) {
        categoryList.set(categoryId, name);
      }
    }
  }
});
