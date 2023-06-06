const express = require("express");
const platformsHandler = require("../handlers/platformsHandler");

const platformsRouter = express.Router();

platformsRouter.get("/", platformsHandler.getPlatformsHandler);

module.exports = platformsRouter;
