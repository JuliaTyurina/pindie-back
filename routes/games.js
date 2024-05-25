const gamesRouter = require("express").Router()

const { findAllGames, createGame, findGameById, updateGame, deleteGame, checkEmptyFields, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkIsGameExists, checkIsVoteRequest } = require('../middlewares/games')
const { sendAllGames, sendGameCreated, sendGameById, sendGameUpdated, sendGameDeleted } = require('../controllers/games')
const { checkAuth } = require("../middlewares/auth")

gamesRouter.get('/games', findAllGames, sendAllGames)
gamesRouter.post("/games", findAllGames, checkIsGameExists, checkIfCategoriesAvaliable, checkEmptyFields, checkAuth, createGame, sendGameCreated)
gamesRouter.get("/games/:id", findGameById, sendGameById)
gamesRouter.put(
  "/games/:id", // Слушаем запросы по эндпоинту  
  findGameById, // Находим игру по id из запроса
  checkIsVoteRequest,
  checkIfUsersAreSafe, // Проверки, если нужны
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  updateGame, // Обновляем запись с игрой
  sendGameUpdated // Возвращаем на клиент ответ с результатом обновления
)
gamesRouter.delete(
  "/games/:id", // Слушаем запросы по эндпоинту
  checkAuth,
  deleteGame,
  sendGameDeleted // Тут будут функция удаления элементов из MongoDB и ответ клиенту
);

module.exports = gamesRouter
