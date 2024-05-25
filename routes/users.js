const usersRouter = require("express").Router()

const { findAllUsers, createUser, findUserById, updateUser, deleteUser, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, checkIsUserExists, filterPassword, hashPassword } = require("../middlewares/users")
const { sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated, sendUserDeleted, sendMe } = require("../controllers/users")
const { checkAuth } = require("../middlewares/auth")

usersRouter.get("/users", findAllUsers, filterPassword, sendAllUsers)
usersRouter.post("/users", findAllUsers, checkIsUserExists, checkEmptyNameAndEmailAndPassword, checkAuth, hashPassword, createUser, sendUserCreated)
usersRouter.get("/users/:id", findUserById, filterPassword, sendUserById)
usersRouter.put(
  "/users/:id", // Слушаем запросы по эндпоинту
  checkEmptyNameAndEmail,
  checkAuth,
  updateUser, // Обновляем запись в MongoDB
  sendUserUpdated // Возвращаем ответ на клиент
)
usersRouter.delete(
  "/users/:id", // Слушаем запросы по эндпоинту
  checkAuth,
  checkEmptyNameAndEmail,
  deleteUser,
  sendUserDeleted // Тут будут функция удаления элементов из MongoDB и ответ клиенту
);

usersRouter.get("/me", checkAuth, sendMe);

module.exports = usersRouter