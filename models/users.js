const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  username: {type:String,required:true},
  password: {type:String,required:true}
})

usersSchema.index({username:1},{unique:true})

const Users = mongoose.model(`Users`,usersSchema);

module.exports = Users;