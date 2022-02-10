import express from 'express';
import db from '../../db.js';

const utilRouter = express.Router()

utilRouter.post("/db" ,  (req, res) => {
    const data = req.body.data
    
    data.map(async (item) => {
        try {
            await db.collection("items").insertOne({marketName : item.market_name , image : item.image, price: item.prices.avg})
            
        } catch (error) {
            console.log(error)
        }
    } )
    res.sendStatus(200)
});

export default utilRouter