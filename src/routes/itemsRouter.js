import express, { Router } from "express";
import { getItems } from "../controllers/getItemsController.js";
const itemsRouter = Router();

itemsRouter.get("/items",getItems)



export default itemsRouter;