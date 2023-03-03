const { Schema, model } = require('mongoose');

const TaskSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        status: {
            type: Boolean,
            default: false
        },
        user_id:{
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Task = model("Task", TaskSchema);

module.exports = Task;
