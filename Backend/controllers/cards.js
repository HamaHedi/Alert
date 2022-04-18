const cardModel = require('../models/card');
class card {
  async getAllCart(req, res) {
    try {
      let Cards = await cardModel.find({});
      if (Cards) {
        return res.json({ Cards });
      }
    } catch (err) {
      console.log(err);
    }
  }
  async getCartById(req, res) {
    let { cId } = req.body;
    try {
      let Card = await cardModel.findById(cId);
      res.status(200).json({ Card });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}
const cardController = new card();
module.exports = cardController;
