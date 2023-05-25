const Drink = require("../models/Drink.model");

module.exports.DrinksController = {
  getDrinks: async (req, res) => {
    try {
      const data = await Drink.find({}, {name: 1, price:1});
      res.json(data);
    } catch (error) {
      res.json(`${error}: Ошибка при вызове списка напитков`);
    }
  },
  getDrinksInStock: async (req, res) => {
    try {
      const data = await Drink.find({availability: {$gt: 0}});
      res.json(data);
    } catch (error) {
      res.json(`${error}: Ошибка при вызове напитков в наличии`);
    }
  },
  getDrink: async (req, res) => {
    try {
      const data = await Drink.findById(req.body.id);
      res.json(data);
    } catch (error) {
      res.json(`${error}: Ошибка при вызове напитка`);
    }
  },
  patchUpdate: async (req, res) => {
    try {
      const data = await Drink.findByIdAndUpdate(req.body.id, {
        name: `${req.body.name}`,
        price: `${req.body.price}`,
        availability: `${req.body.availability}`,
        caffeine: `${req.body.caffeine}`,
        volume: `${req.body.volume}`,
        description: `${req.body.description}`,
      });
      res.json(data);
    } catch (error) {
      res.json(`${error}: Ошибка при обновлении напитка`);
    }
  },
  createDrink: async (req, res) => {
    try {
      await Drink.create({
        name: req.body.name,
        price: req.body.price,
        availability: req.body.availability,
        caffeine: req.body.caffeine,
        volume: req.body.volume,
        description: req.body.description,
      });
      res.json("Напиток добавлен");
    } catch (error) {
      res.json(`${error}: Ошибка при добавлении напитка`);
    }
  },
  deleteDrink: async (req, res) => {
    try {
      await Drink.findOneAndRemove(req.body.id);
      res.json("Напиток удален");
    } catch (error) {
      res.json(`${error}: Ошибка при удалении напитка`);
    }
  },
};
