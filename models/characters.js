const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const charactersSchema = new Schema({
  name: {type:String,required:true},
  image: String,
  skill: String,
  maxLevelRequirement: String
})

charactersSchema.index({username:1},{unique:true})

const Characters = mongoose.model(`Characters`,charactersSchema);

module.exports = Characters;