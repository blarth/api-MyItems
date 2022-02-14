import db from "../../db.js";

export async function resgisterSales(req, res) {
  
    const userData = res.locals.user
    

    
    try {
        
        await db.collection("sales").insertOne( {buyer : userData._id , boughtItems : req.body});
        res.sendStatus(201);
          
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
  
    
  }