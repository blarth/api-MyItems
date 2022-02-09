import sanitizeData from "../schemas/Sanitizer.js";
import schemaSignUp from "../schemas/SchemaSignup.js"
import db from "../../db.js";


export async function validateSchemaSignUp(req, res, next){
    const validation = schemaSignUp.validate(req.body)
  
    if (validation.error) {
      res.status(422).send(validation.error.details)
      return;
    }
    const alreadyInDB = await db.collection("users").findOne({userData})
          if(alreadyInDB){
              return res.sendStatus(409)
    }
    res.locals.user = {
        firstname : sanitizeData(req.body.firstname),
        lastname : sanitizeData(req.body.lastname),
        email : sanitizeData(req.body.email),
        password : sanitizeData(req.body.password)
    }

    next()
}