import db from "../../db.js"
export async function getItems(req,res){
   try{
        let items = await db.collection("items").find().sort({$natural:1}).limit(50).toArray();
        return res.send(items)
   }catch(e){
        console.log(e)
        res.status(501).send({msg:"Erro no banco de dados"})
   }

}