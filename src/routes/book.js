import * as controllers from "../controllers";
import express from "express";
import verifyToken from "../middlewares/verify_token";
import { isCreatorOrAdmin } from "../middlewares/verify_role";
import uploadCloud from "../middlewares/uploader";

const routes = express.Router();

// PUBLIC ROUTES
routes.get("/", controllers.getBooks);

// PRIVATE ROUTES
routes.use(verifyToken);
routes.use(isCreatorOrAdmin);
routes.post("/", uploadCloud.single("image"), controllers.createNewBook);
routes.put("/", uploadCloud.single("image"), controllers.updateBook);
routes.delete("/", controllers.deleteBook);

module.exports = routes;
