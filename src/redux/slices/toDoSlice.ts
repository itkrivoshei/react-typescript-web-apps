import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface Project {
  id: number | string;
  title: string;
  todos: Todo[];
}

interface TodoState {
  projects: Project[];
  activeProject: string | number;
}

const defaultProjectId = 'default';

const initialState: TodoState = {
  projects: [
    {
      id: defaultProjectId,
      title: 'Default Project',
      todos: [],
    },
  ],
  activeProject: defaultProjectId,
};

const findActiveProject = (state: TodoState) =>
  state.projects.find((project) => project.id === state.activeProject);

const toDoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const project = findActiveProject(state);

      if (!project) return;

      project.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },

    deleteTodo: (state, action: PayloadAction<number>) => {
      const project = findActiveProject(state);

      if (!project) return;

      project.todos = project.todos.filter((todo) => todo.id !== action.payload);
    },

    addProject: (state, action: PayloadAction<string>) => {
      state.projects.push({ id: Date.now(), title: action.payload, todos: [] });
    },

    setActiveProject: (state, action: PayloadAction<string | number>) => {
      state.activeProject = action.payload;
    },

    deleteProject: (state, action: PayloadAction<string | number>) => {
      if (action.payload === defaultProjectId) return;

      state.projects = state.projects.filter(
        (project) => project.id !== action.payload
      );

      if (state.activeProject === action.payload) {
        state.activeProject = defaultProjectId;
      }
    },

    editProject: (
      state,
      action: PayloadAction<{ projectId: string | number; newName: string }>
    ) => {
      const project = state.projects.find(
        (item) => item.id === action.payload.projectId
      );

      if (project) {
        project.title = action.payload.newName;
      }
    },

    editTodo: (
      state,
      action: PayloadAction<{ todoId: number; newText: string }>
    ) => {
      const project = findActiveProject(state);
      const todo = project?.todos.find(
        (item) => item.id === action.payload.todoId
      );

      if (todo) {
        todo.text = action.payload.newText;
      }
    },

    toggleTodo: (state, action: PayloadAction<number>) => {
      const project = findActiveProject(state);
      const todo = project?.todos.find((item) => item.id === action.payload);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  addProject,
  setActiveProject,
  deleteProject,
  editProject,
  editTodo,
  toggleTodo,
} = toDoSlice.actions;

export default toDoSlice.reducer;
