import express from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";

const routes = express.Router();

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

routes.get("/classes", classesController.index);
routes.post("/classes", classesController.create);

routes.post("/connections", connectionsController.create);
routes.get("/connections/total", connectionsController.totalConnections);

export default routes;
