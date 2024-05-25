const apiRouter = require("express").Router();
const authRouter = require("./auth");
const categoriesRouter = require("./categories");
const gamesRouter = require("./games");
const usersRouter = require("./users");

// Импорты и инициализация главного роута
apiRouter.use("/api", gamesRouter);
apiRouter.use("/api", usersRouter);
apiRouter.use("/api", categoriesRouter);
apiRouter.use("/api", authRouter);

// Код роута
module.exports = apiRouter;