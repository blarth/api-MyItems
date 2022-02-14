import db from "../../db.js"
export async function getItems(req,res){
     let page = req.query.page;
     console.log(page)
   try{
     let totalCount = await db.collection("items").count();
        if(page){
          let items = await db.collection("items").find().sort({$natural:1}).limit(9).skip(page*9).toArray();
          return res.send({items,total:totalCount})  
          }
          let items = await db.collection("items").find().sort({$natural:1}).toArray();
          return res.send(items)  
   }catch(e){
        console.log(e)
        res.status(501).send({msg:"Erro no banco de dados"})
   }

}