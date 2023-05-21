const { Router } = require("express");
const vgGenresHandler = require("../handlers/genresHandler");

const genresRouter = Router();

genresRouter.get("/", vgGenresHandler);

module.exports = genresRouter;
