// Создаём роут для запросов категорий 
const categoriesRouter = require('express').Router();

// Импортируем вспомогательные функции
const { findAllCategories, createCategory, findCategoryById, updateCategory, deleteCategory, checkIsCategoryExists, checkEmptyName } = require('../middlewares/categories');
const { sendAllCategories, sendCategoryCreated, sendCategoryById, sendCategoryUpdated, sendCategoryDeleted } = require('../controllers/categories');

// Обрабатываем GET-запрос с роутом '/categories'
categoriesRouter.get('/categories', findAllCategories, sendAllCategories)
categoriesRouter.post('/categories', findAllCategories, checkEmptyName, checkIsCategoryExists, createCategory, sendCategoryCreated)
categoriesRouter.get('/categories/:id', findCategoryById, sendCategoryById)
categoriesRouter.put(
  "/categories/:id", // Слушаем запросы по эндпоинту
  checkEmptyName,
  updateCategory, // Обновляем запись в MongoDB
  sendCategoryUpdated // Возвращаем ответ на клиент
)
categoriesRouter.delete(
  "/categories/:id", // Слушаем запросы по эндпоинту
  deleteCategory,
  sendCategoryDeleted // Тут будут функция удаления элементов из MongoDB и ответ клиенту
)


// Экспортируем роут для использования в приложении — app.js
module.exports = categoriesRouter;
