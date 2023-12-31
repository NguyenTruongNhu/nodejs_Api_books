import * as controllers from "../controllers";
import express from "express";

const routes = express.Router();

routes.post("/register", controllers.register);
routes.post("/login", controllers.login);
routes.post("/refresh-token", controllers.refreshTokenController);

module.exports = routes;
