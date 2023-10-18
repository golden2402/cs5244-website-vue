import { defineStore } from "pinia";

import type { BookItemResource } from "@/types";

import { apiUrl } from "@/api";

export const useBookStore = defineStore("book", {
  state: () => ({
    bookList: [] as BookItemResource[]
  }),
  actions: {
    async fetchBooks(categoryId: number) {
      const response = await fetch(`${apiUrl}/categories/${categoryId}/books`);
      this.bookList = await response.json();
    }
  }
});
