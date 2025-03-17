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
}
