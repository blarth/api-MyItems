import sanitizeData from "../schemas/sanitizer.js";
import schemaSignUp from "../schemas/schemaSignUp.js"
import signInSchema from "../schemas/schemaSignIn.js"




export async function validateSchemaSignUp(req, res, next){
    const validation = schemaSignUp.validate(req.body)
  
    if (validation.error) {
      res.status(422).send(validation.error.details)
      return;
    }
    
    res.locals.user = {
        firstname : sanitizeData(req.body.firstname),
        lastname : sanitizeData(req.body.lastname),
        email : sanitizeData(req.body.email),
        password : sanitizeData(req.body.password)
    }

    next()
}

export async function validateSchemaSignIn(req, res, next){
    const validation = signInSchema.validate(req.body)

    if (validation.error) {
        res.status(422).send(validation.error.details)
        return;
      }

      res.locals.user = {
        email : sanitizeData(req.body.email),
        password : sanitizeData(req.body.password)
    }

    next()

}