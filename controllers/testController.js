const Test = require("../models/Test");
const uuid = require("uuid");

class testController {
  async getTestByCategory(req, res) {
    try {
      var category = req.query.category;
      var amount = parseInt(req.query.amount);
      var languages = req.query.languages;

      const questions = await Test.find({ category, languages });

      function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      const random = randomIntFromInterval(0, questions.length - amount);
      const result = questions.slice(random, random + amount);

      return res.json(result);
    } catch (error) {
      return res.status(400).send({ message: err });
    }
  }

  async getCategories(req, res) {
    try {
      const tests = await Test.find();
      const categories = new Set(tests.map((test) => test.category));
      let unique = [];
      for (let category of categories.values()) {
        unique.push({
          id: uuid.v4(),
          name: category,
        });
      }
      // const unique
      res.json({ categories: unique });
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new testController();
