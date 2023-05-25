const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(require("./routes/drinks.route"));

mongoose
  .connect(
    "mongodb+srv://rasvom:qwerty1234@cluster0.2rrmmtm.mongodb.net/coffeeData?retryWrites=true&w=majority"
  )
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(4000, () => {
  console.log("Сервер запущен успешно");
});
