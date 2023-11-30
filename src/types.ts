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

export interface CustomerForm {
  name: string;
  address: string;
  phone: string;
  email: string;
  ccNumber: string;
  ccExpiryMonth: number;
  ccExpiryYear: number;
}

export interface Order {
  orderId: number;
  amount: number;
  dateCreated: number;
  confirmationNumber: number;
  customerId: number;
}

export interface LineItem {
  bookId: number;
  orderId: number;
  quantity: number;
}

export interface Customer {
  customerName: string;
  address: string;
  phone: string;
  email: string;
  ccNumber: string;
  ccExpDate: number;
}

export interface OrderDetails {
  order: Order;
  customer: Customer;
  books: BookItem[];
  lineItems: LineItem[];
}

export interface ServerErrorResponse {
  reason: string;
  message: string;
  fieldName: string;
  error: boolean;
}
