import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};