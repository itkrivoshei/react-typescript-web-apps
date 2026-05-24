import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface Project {
  id: string;
  title: string;
  todos: Todo[];
}

interface TodoState {
  projects: Project[];
  activeProject: string;
}

export const defaultProjectId = 'default';

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
    addTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        const project = findActiveProject(state);

        if (!project) return;

        project.todos.push(action.payload);
      },
      prepare: (text: string) => ({
        payload: {
          id: nanoid(),
          text,
          completed: false,
        },
      }),
    },

    deleteTodo: (state, action: PayloadAction<string>) => {
      const project = findActiveProject(state);

      if (!project) return;

      project.todos = project.todos.filter((todo) => todo.id !== action.payload);
    },

    addProject: {
      reducer: (state, action: PayloadAction<Project>) => {
        state.projects.push(action.payload);
        state.activeProject = action.payload.id;
      },
      prepare: (title: string) => ({
        payload: {
          id: nanoid(),
          title,
          todos: [],
        },
      }),
    },

    setActiveProject: (state, action: PayloadAction<string>) => {
      const projectExists = state.projects.some(
        (project) => project.id === action.payload
      );

      if (projectExists) {
        state.activeProject = action.payload;
      }
    },

    deleteProject: (state, action: PayloadAction<string>) => {
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
      action: PayloadAction<{ projectId: string; newName: string }>
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
      action: PayloadAction<{ todoId: string; newText: string }>
    ) => {
      const project = findActiveProject(state);
      const todo = project?.todos.find(
        (item) => item.id === action.payload.todoId
      );

      if (todo) {
        todo.text = action.payload.newText;
      }
    },

    toggleTodo: (state, action: PayloadAction<string>) => {
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
