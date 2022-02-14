import db from "../../db.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

export async function signUp(req, res) {
  
    const userData = res.locals.user
    const alreadyInDB = await db.collection("users").findOne({userData})
          if(alreadyInDB){
              return res.sendStatus(409)
    }
    
    try {
        const passwordHash = bcrypt.hashSync(userData.password, parseInt(process.env.DIF));
        await db.collection("users").insertOne({ ...userData, password: passwordHash });
        res.sendStatus(201);
          
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
  
    
  }

  export async function signIn(req, res) {
    const user = res.locals.user
    
    try {
        const participant = await db.collection("users").findOne({email:user.email})
        
        if(participant && bcrypt.compareSync(user.password, participant.password)){
            let session = await db.collection("sessions").findOne({userId: participant._id})

            if(!session){
                await db.collection("sessions").insertOne({
                    userId: participant._id
                })
                session = await db.collection("sessions").findOne({userId: participant._id})
            }
            
            const data = { session: session._id };
            const secretkey = process.env.JWT_SECRET;
            const token = jwt.sign(data, secretkey);

            return res.status(200).send(token);
        }else{
            return res.status(401).send("Participante não existe")
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}