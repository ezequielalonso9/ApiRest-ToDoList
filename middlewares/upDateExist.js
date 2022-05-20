const {response} = require('express');



const upDateExist = ( req, res = response, next ) =>{

    const body = req.body;
    

    if ( !Object.values( body ).length ) {
        return res.status(400).json({
            msg: 'no hay datos para actualizar'
        })
    }

    next()

}

module.exports = upDateExist;