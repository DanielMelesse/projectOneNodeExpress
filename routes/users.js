// free library 

const express = require('express');
const router = require('express-promise-router')();
// local file require
const  userController = require('../controllers/users');
const {validateBody, schemas} = require('../helpers/routesHelpers')

// if router is ex https:4000/users/signup 
// will call funcation singup in controller/users.js funcation
router.route('/signup')
.post(validateBody(schemas.authSchema), userController.singup) // first validate body with schama autho then function next() from schama method navigate to the signup controllers 

router.route('/signin').post(userController.singin);

router.route('/secret').post(userController.secret);
module.exports = router;