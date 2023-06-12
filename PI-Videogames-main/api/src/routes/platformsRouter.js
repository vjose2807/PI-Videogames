const { Router } = require("express");
const { getPlatformsHandler } = require("../handlers/platformsHandler");

const platformsRouter = Router();

platformsRouter.get("/", getPlatformsHandler);

module.exports = platformsRouter;
