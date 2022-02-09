import express from 'express';

const utilRouter = express.Router()

utilRouter.get("/db" , (req, res) => {
    console.log(res)
});

export default utilRouter