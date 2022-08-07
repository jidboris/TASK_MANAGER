const { mongoose } = require('mongoose');
const taskModel = mongoose.Schema({
    Task: {
        type: String, required: true
    },

    Completed: {
        type: String,
        required: true
    },

    Owner: {
        type: String }
    },
        {timestamps: true}
);

module.exports = mongoose.model('Task', taskModel);