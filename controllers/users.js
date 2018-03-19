module.exports ={
    singup: async(req, res, next) => {
        // required user email and psssword 
        res.json({message: "signup"})
        console.log(req.value.body)

        console.log("users controller.sginup() call")
    },

    singin: async(req, res, next) => {
        // we need to generate token here 

        res.json({message: "signin"})
        console.log(req.body)
        console.log("users controller.signin() call")
    },

    secret: async(req, res, next) => {
        res.json({message: "secret"})
        console.log("users controller.secret() call")
    }
}