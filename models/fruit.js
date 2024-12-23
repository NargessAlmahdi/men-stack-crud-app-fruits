const mongoose = require("mongoose");

// 1. CREATE THE SCHEMA
const fruitSchema = new mongoose.Schema({
    name: String,
    isReadyToEat: Boolean,
  });


//   2. REGISTER THE MOEL

const Fruit = mongoose.model("Fruit", fruitSchema);

// 3.SHARE IT WITH THE REST OF THE APP
module.exports = Fruit;