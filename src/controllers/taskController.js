import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  const filters = {};

  if (req.query.completed !== undefined) {
    filters.completed = req.query.completed === 'true';
  }

  const tasks = await taskService.getAllTasks(filters);
  res.json(tasks);
}

export async function createTask(req, res, next) {
  const { title, completed } = req.body;
  const task = await taskService.createTask({ title, completed });
  res.status(201).json(task);
}
