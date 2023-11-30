import { defineStore } from "pinia";

import type { BookItemResource } from "@/types";

import { apiUrl } from "@/api";

export const useBookStore = defineStore("book", {
  state: () => ({
    bookList: [] as BookItemResource[]
  }),
  actions: {
    async fetchBooks(categoryName: string) {
      const response = await fetch(`${apiUrl}/categories/name/${categoryName}/books`);
      const data = await response.json();

      if (data && !data.error) {
        this.bookList = data;
        return true;
      }

      return false;
    }
  }
});
