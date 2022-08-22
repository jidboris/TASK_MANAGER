const express = require("express");
const router = express.Router();
const CORS = require("cors");
//const taskSchema = require("../modules/taskSchema")
const taskController = require("../Controller/task")

// Defining swagger schema documentation for tasks
// /**
// * @swagger
// *  components:
// *     schema:
// *        task:
// *            type: object
// *            properties:
// *                 Task:
// *                     type: string
// *                 Completed:
// *                     type: string
// *                 Owner:
// *                     type: string
// */

// swagger doucumentation of task post api route
/**
 * @swagger
 * /tasks:
 *  post:
 *     description: use to add a task     
 *     responses:
 *      '200':
 *        description: Task assigned successfully          
 */
router.post('/', taskController.createTask);
/**
  * @swagger
  * /tasks:
  *  get:
  *     summary: To get all tasks
  *     description: use to add a task  
  *     responses: 
  *         200:
  *             description: This api is used to fetch all tasks          
  */
router.get('/', taskController.retrieve);
/**
  * @swagger
  * /tasks/:id/tasks:
  *  get:
  *     summary: To get all tasks
  *     description: use this api to fetch a task 
  *     responses: 
  *         200:
  *             description: This api is used to fetch assigned task          
  */
router.get('/:id/', taskController.retrieveOne);
/**
  * @swagger
  * /tasks/:id/tasks:
  *  put:
  *     summary: To get all tasks 
  *     description: use this api to fetch a task 
  *     responses: 
  *         200:
  *             description: This api is used to update task details          
  */
router.put('/:id/', taskController.changeTask);

// Logic for deleting task details
/**
  * @swagger
  * /tasks/:id/tasks:
  *  delete:
  *     summary: To get all tasks 
  *     description: use this api to delete a task 
  *     responses: 
  *         200:
  *             description: This api is used to delete task input          
  */
router.delete('/:id/tasks', taskController.deleteTask)


module.exports = router