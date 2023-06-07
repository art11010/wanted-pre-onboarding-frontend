import axios from 'axios';

const baseURL = 'https://www.pre-onboarding-selection-task.shop';

export const signUp = async (email, password) => {
  try {
    const response = await axios.post(
      `${baseURL}/auth/signup`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
      {
        email,
        password,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const signIn = async (email, password) => {
  try {
    const response = await axios.post(
      `${baseURL}/auth/signin`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
      {
        email,
        password,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getTodos = async (token) => {
  try {
    const response = await axios.get(`${baseURL}/todos`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const createTodo = async (token, todo) => {
  try {
    console.log(todo);
    const response = await axios.post(
      `${baseURL}/todos`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
      {
        todo,
      }
    );
    console.log(todo);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data.message);
  }
};
