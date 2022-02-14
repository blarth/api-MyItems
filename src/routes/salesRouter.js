import express, { Router } from "express";
import { resgisterSales } from "../controllers/salesController.js";
import validateTokenMiddleware from "../middlewares/validationToken.js";
const salesRouter = Router();

salesRouter.post("/sale", validateTokenMiddleware , resgisterSales )



export default salesRouter;