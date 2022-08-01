const Test = require("../models/Test");
const uuid = require("uuid");

class testController {
  async getTestByCategory(req, res) {
    try {
      console.log(req.query.category);
      //  if (req.query.category === undefined) {
      //    return res.json(
      //      {message: 'поле катешорие пустое'}
      //)
      //}
      var category = req.query.category; //запрос с фронта
      var amount = req.query.amount;
      var languages = req.query.languages;
      /* if (amount === undefined){
                 amount = 1
             } */
      const countTest = await Test.find({ category }).count();

      function randomIntFromInterval(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      console.log(countTest);
      const random = randomIntFromInterval(0, countTest);

      console.log(random);

      const t = await Test.find({ category, languages })
        .skip(random)
        .limit(amount);

      return res.json(t);
    } catch (error) {
      console.log(error);
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
