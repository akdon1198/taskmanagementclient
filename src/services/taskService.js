import axios from 'axios';

const taskService = {
  getAllTasks: async () => {
    const response = await axios.get('/api/tasks');
    return response.data;
  },
  createTask: async (taskData) => {
    const response = await axios.post('/api/tasks', taskData);
    return response.data;
  },
};

export default taskService;
