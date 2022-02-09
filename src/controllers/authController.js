import db from "../../db.js";
import bcrypt from 'bcrypt'

export async function signUp(req, res) {
  
    const userData = res.locals.user
    
    try {
        const passwordHash = bcrypt.hashSync(userData.password, parseInt(process.env.DIF));
        await db.collection("users").insertOne({ ...userData, password: passwordHash });
        res.sendStatus(201);
          
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
  
    
  }