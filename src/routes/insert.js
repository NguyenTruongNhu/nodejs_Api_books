import * as controllers from "../controllers";
import express from "express";

const routes = express.Router();

routes.get("/", controllers.insertData);

export default routes;
