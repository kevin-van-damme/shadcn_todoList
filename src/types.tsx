export interface Todo {
  todos: TodoElement[];
  categories: Category[];
}
export interface Category {
  id: string;
  name: string;
  color: string;
}
export interface TodoElement {
  id: string;
  text: string;
  completed: boolean;
  category: string;
  description: string;
}
export interface PaginationState {
  currentPage: number;
  itemsPerPage: number;
}
export interface ListResponse<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T[];
}
