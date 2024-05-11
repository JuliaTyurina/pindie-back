// app.js 
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const gamesRouter = require('./routes/games')
const categoriesRouter = require('./routes/categories')
const usersRouter = require('./routes/users')

const cors = require("./middlewares/cors")
const connectToDatabase = require('./database/connect')

const PORT = 3000;
const app = express();

connectToDatabase()

app.use(
  cors,
  bodyParser.json(),
  express.static(path.join(__dirname, 'public')),
  gamesRouter,
  categoriesRouter,
  usersRouter,
);

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
})