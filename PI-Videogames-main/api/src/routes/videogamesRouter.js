const { Router } = require("express");
const {
  vgDetailHandler,
  videogamesHandler,
  vgCreateHandler,
} = require("../handlers/videogamesHandler");

const videogamesRouter = Router();

videogamesRouter.get("/", videogamesHandler);
videogamesRouter.get("/:id", vgDetailHandler);
videogamesRouter.post("/", vgCreateHandler);

module.exports = videogamesRouter;
