const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const talentDetails = new Schema({
  talentName: String,
  talentDesc: String
})

const matDetails = new Schema({
  name: String,
  amount: Number
})

const maxLevelMats = new Schema({
  mora: Number,
  materials: [matDetails]
})

const charactersSchema = new Schema({
  name: String,
  element: String,
  image: String,
  talents: [talentDetails],
  maxLevelRequirement: [maxLevelMats]
})

charactersSchema.index({name:1},{unique:true})

const Characters = mongoose.model(`Characters`,charactersSchema);

module.exports = Characters;