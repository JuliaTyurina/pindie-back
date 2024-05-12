const gamesRouter = require("express").Router()

const { findAllGames, createGame, findGameById, updateGame, deleteGame, checkEmptyFields, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkIsGameExists } = require('../middlewares/games')
const { sendAllGames, sendGameCreated, sendGameById, sendGameUpdated, sendGameDeleted } = require('../controllers/games')

gamesRouter.get('/games', findAllGames, sendAllGames)
gamesRouter.post("/games", findAllGames, checkIsGameExists, checkIfCategoriesAvaliable, checkEmptyFields, createGame, sendGameCreated)
gamesRouter.get("/games/:id", findGameById, sendGameById)
gamesRouter.put(
  "/games/:id", // Слушаем запросы по эндпоинту  
  findGameById, // Шаг 1. Находим игру по id из запроса
  checkIfUsersAreSafe, // Шаг 2. Проверки, если нужны
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  updateGame, // Шаг 3. Обновляем запись с игрой
  sendGameUpdated // Шаг 4. Возвращаем на клиент ответ с результатом обновления
)
gamesRouter.delete(
  "/games/:id", // Слушаем запросы по эндпоинту
  deleteGame,
  sendGameDeleted // Тут будут функция удаления элементов из MongoDB и ответ клиенту
);

module.exports = gamesRouter
