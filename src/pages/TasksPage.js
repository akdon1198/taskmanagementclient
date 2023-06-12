import React, { useState, useEffect } from 'react';
import TaskList from '../componets/TaskList';
import TaskForm from '../componets/TaskForm';
import taskService from '../services/taskService';

function TasksPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const tasksData = await taskService.getAllTasks();
      setTasks(tasksData);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async (newTask) => {
    try {
      const createdTask = await taskService.createTask(newTask);
      setTasks([...tasks, createdTask]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <div>
      <h1>Task Management Application</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default TasksPage;
