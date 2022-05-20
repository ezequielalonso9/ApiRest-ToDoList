
const msgByMethod = {
    "GET" : "Tasks on database",
    "POST" : "Task created",
    "PUT" : "updated task",
    "DELETE": "deleted task"
}

responses = ( task, req, res ) => {


    if ( !task ) {
        return res.status(400).json({
            msg: 'La tarea no existe en DB'
        })
    }

    res.json({
        msg: msgByMethod[req.method],
        task
    });
} 

module.exports = {
    responses
}