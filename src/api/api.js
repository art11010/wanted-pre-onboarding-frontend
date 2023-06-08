import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop',
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
});

export const signUp = async (email, password) => {
  try {
    const response = await instance.post('/auth/signup', {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const signIn = async (email, password) => {
  try {
    const response = await instance.post('/auth/signin', {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const createTodo = async (todo) => {
  try {
    const response = await instance.post('/todos', {
      todo,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getTodos = async () => {
  try {
    const response = await instance.get('/todos');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const updateTodo = async (id, todo, isCompleted) => {
  try {
    const response = await instance.put(`/todos/${id}`, {
      todo,
      isCompleted,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
export const deleteTodo = async (id) => {
  try {
    const response = await instance.delete(`/todos/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
