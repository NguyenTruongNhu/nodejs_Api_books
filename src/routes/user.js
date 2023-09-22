import * as controllers from "../controllers";
import express from "express";
import verifyToken from "../middlewares/verify_token";
import { isAdmin, isModeratorOrAdmin } from "../middlewares/verify_role";

const routes = express.Router();

// PUBLIC ROUTES

// PRIVATE ROUTES
routes.use(verifyToken);
routes.get("/", controllers.getCurrent);

module.exports = routes;
