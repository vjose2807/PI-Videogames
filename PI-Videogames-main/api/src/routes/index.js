const { Router } = require("express");

const genresRouter = require("./genresRoutes");
const videogamesRouter = require("./videogamesRouter");
const platformsRouter = require("./platformsRouter");

const router = Router();

router.use("/videogames", videogamesRouter);
router.use("/genres", genresRouter);
router.use("/platforms", platformsRouter);

module.exports = router;
