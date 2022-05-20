const { Router } = require('express');
const { check } = require('express-validator');

const { listTask,
    createTask,
    upDateTask,
    DeleteTask 
} = require('../controllers/task.controllers');
const { isDateValid } = require('../middlewares/isDateValid');

const { isStateTaskValid } = require('../middlewares/isStateTaskValid');
const upDateExist = require('../middlewares/upDateExist');
const { validarCampos } = require('../middlewares/validarCampos');


const router = Router();

router.get('/',listTask );

router.post('/',[
    check('user','El usuario es obligatorio').not().isEmpty(),
    check('task','La tarea es obligatoria').not().isEmpty(),
    check('creationDate','No se puede ingresar fecha de creación').isEmpty(),
    check('upDateTask','No se puede ingresar modificacación').isEmpty(),
    isStateTaskValid,
    validarCampos
] ,createTask );

router.put('/:id',[
    check('id','El id no es valido').isMongoId(),
    upDateExist,
    check('upDateTask','Debe ingregar la actualización').not().isEmpty(),
    validarCampos
]
, upDateTask );

router.delete('/:id',[
    check('id','El id no es valido').isMongoId(),
    validarCampos
], DeleteTask );

module.exports = router;