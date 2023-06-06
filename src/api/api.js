import axios from 'axios';

const baseURL = 'https://www.pre-onboarding-selection-task.shop';

export const signUp = async (email, password) => {
  try {
    const response = await axios.post(`${baseURL}/auth/signup`, {
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
    const response = await axios.post(`${baseURL}/auth/signin`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
