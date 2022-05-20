const { request, response } = require('express');
const { responses } = require('../helpers/responses');

const Task = require('../models/task');




const listTask = async ( req = request, res = response ) => {

    const { cantidad, desde } = req.query
    const tasks = await Task.find()
                            .limit( Number(cantidad) )
                            .skip( Number(desde) );
 
    responses( tasks, req, res );

}

const createTask = async ( req = request, res = response ) => {
    
    const body = req.body; 
    const task = new Task( body );
    await task.save();

    responses( task, req, res );

}

const upDateTask = async ( req = request, res = response ) => {
 
    const { id } = req.params;
    const upDateData = req.body;
    
    const task = await Task.findByIdAndUpdate( id, upDateData );
    responses( task, req, res );

}

const DeleteTask = async ( req = request, res = response ) => {

    const { id } = req.params;
    const task = await Task.findByIdAndDelete( id );    
    
    responses( task, req, res );
    
}

module.exports = {
    listTask,
    createTask,
    upDateTask,
    DeleteTask
}