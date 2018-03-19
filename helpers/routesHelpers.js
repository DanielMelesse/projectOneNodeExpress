

const joi = require('joi');
module.exports = {
    validateBody: (schema) => {
        return(req, res, next) =>{
            const result = joi.validate(req.body, schema);
            if(result.error){
                return res.status(400).json(result.error)
            }

            /**
             * empity request body check. 
             * if request body is empity create empity object and assign it to resutl.value
             */

            if(!req.value) {req.value = {}; }
            req.value['body'] = result.value;
            /**
             * need to call method next if not we get block here
             */
            next();
        }
    } , 
    // this is sign up schema.
     schemas: {
        authSchema: joi.object().keys({
            email: joi.string().email().required(),
            password: joi.required(), // if wanna add password validation password: joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(), something like that
        })
     }
}