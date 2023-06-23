export type TodoState = 'all' | 'open' | 'completed';

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};
