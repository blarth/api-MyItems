import db from "../db.js"
import jwt from 'jsonwebtoken';
import { ObjectId } from "mongodb"

export default async function validateTokenMiddleware(req, res, next){
    try {
        const token = req.headers.authorization?.replace("Bearer ", "")
        
        if(!token) return res.sendStatus(401)
        
        const {session} = jwt.verify(token, process.env.JWT_SECRET);
        
        const userSession = await db.collection("sessions").findOne({_id:new ObjectId(session)})
        if(!userSession) return res.sendStatus(401)
        
        const user = await db.collection("users").findOne({_id:userSession.userId})
        if(!user) return res.sendStatus(401)
    
        res.locals.user = user
        
        next()
    } catch (error) {
        res.status(500).send(error);
    }
}