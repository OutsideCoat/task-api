import prisma from '../config/db.js';

export async function findAll(filters = {}) {
  const query = {};

  if (typeof filters.completed === 'boolean') {
    query.where = { completed: filters.completed };
  }

  return prisma.task.findMany(query);
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
