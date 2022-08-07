const taskModel = require('../modules/taskSchema');

const createTask = async (req, res, next) => {
        const newTask = await taskModel.create(
            {
                Task: req.body.Task,
                Completed : req.body.Completed,
                Owner: req.body.Owner
            })

        newTask.save();

        res.json(
            newTask
        )
        console.log('New Task', newTask)
    }

const retrieve = async (req, res, next,) => {
    const tasks = await taskModel.find()
            console.log('Tasks', tasks);
    res.json(
        tasks)
    };

const retrieveOne = async (req, res, next,) => {
   const oneTask = await taskModel.findById(req.params.id).exec();
      if (oneTask) {
         res.status(404).send('task with the given id does not exist')
       }
     else {
         res.json('Task assigned:' , oneTask)
         console.log('Task assigned:', oneTask)
     }
    }
module.exports = {
    createTask,
    retrieve,
    retrieveOne
}