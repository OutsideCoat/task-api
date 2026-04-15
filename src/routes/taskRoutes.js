import express from 'express';
import * as taskController from '../controllers/taskController.js';
import { validateTask, validateTaskFilters } from '../middleware/validateTask.js';

const router = express.Router();

router.get('/', validateTaskFilters, taskController.getTasks);
router.post('/', validateTask, taskController.createTask);

export default router;
