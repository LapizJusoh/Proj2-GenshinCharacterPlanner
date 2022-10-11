const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const materialsSchema = new Schema({
  name: {type:String,required:true},
  image: String,
  type: String,
  from: String
})

materialsSchema.index({name:1},{unique:true})

const Materials = mongoose.model(`Materials`,materialsSchema);

module.exports = Materials;