const { Schema, model } = require('mongoose');

const TaskSchema = new Schema({
    
    user: {
        type: String,
        required: [ true, 'El email es requerido']
    },
    task:
        { content: {
            type: String,
            required: [ true, 'la tarea es requerida']
        },
        deliveryDate: { type: Date }
        },
    creationDate: {
        type: Date,
        default: Date.now
    },
    stateTask: {
        type: String,
        enum: ['pending', 'in process', 'finished'],
        default: 'pending'
    },
    upDateTask: {
        date: {
            type: Date,
            default: Date.now
         },
        comments: { type: String },
    }
})



module.exports= model('Task', TaskSchema);