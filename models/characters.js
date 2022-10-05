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
  generalMaterials: [matDetails],
  charaMaterials: [matDetails]
})

const charactersSchema = new Schema({
  name: {type:String,required:true},
  image: String,
  talents: [talentDetails],
  maxLevelRequirement: [maxLevelMats]
})

charactersSchema.index({username:1},{unique:true})

const Characters = mongoose.model(`Characters`,charactersSchema);

module.exports = Characters;