const { request } = require('express');
const { status } = require('express/lib/response');



const isStateTaskValid = ( req = request, res, next ) => {

    const body = req.body;
    const stateTaskValid = ['pending', 'in process', 'finished'];

    if ( body.stateTask  ) {

        if ( !stateTaskValid.some( value => value === body.stateTask ) ){
            return res.status(400).json({
                err: 'Error al inglresar el parametro stateTask'
            })
        } 
    }

    next();
}

module.exports = {
    isStateTaskValid
}