const { validationResult } = require('express-validator');
const { request } = require('express');

const validarCampos = ( req = request, res , next) => {

    const errors = validationResult( req );

    
    if ( !errors.isEmpty() ) {
        console.log('hay error')
        return res.status(400).json({
            msg: 'Error al ingresar los datos',
            errors: errors.array()
        })
    }

    next();
}

module.exports = {
    validarCampos
}