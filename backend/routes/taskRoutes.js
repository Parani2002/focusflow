import express from 'express';
const router = express.Router();

import {getAllTasks, createTask , getTask , updateTask , deleteTask} from '../controllers/taskController.js';

console.log('Task routes loaded');


router.get('/', getAllTasks);
router.post('/', createTask);
router.get('/:id', getTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
 
export default router;

