import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop',
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

export const createTodo = async (token, todo) => {
  try {
    const response = await instance.post(
      '/todos',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      {
        todo,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getTodos = async (token) => {
  try {
    const response = await instance.get('/todos', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const updateTodo = async (token, id, todo, isCompleted) => {
  console.log(token, id, todo, isCompleted);
  try {
    const response = await instance.put(
      `/todos/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      {
        todo,
        isCompleted,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data.message);
  }
};
