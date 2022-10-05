/*
REQUIRED INSTALL
1. npm init
2. touch index.js
3. npm i express
4. npm i nodemon
5. npm i dotenv
6. npm i ejs
7. npm i method-override
8. npm i mongoose
9. npm i brcrypt
10. npm i express-session
11. app.set(`views engine`,`ejs`);
12. require(`dotenv`).config();
13. app.use(express.urlencoded({extended: true}));
14. app.use(methodOverride(`_method`));
15. 
*/

/*======================
  DEPENDENCIES
======================*/

const express = require(`express`);
const session = require(`express-session`);
const mongoose = require(`mongoose`);
const methodOverride = require(`method-override`);
const Characters = require(`./models/characters.js`)
const charactersController = require(`./controllers/charactersController.js`)

require(`dotenv`).config();

/*======================
  VARIABLES
======================*/

const app = express();
const portNum = process.env.PORT;
const mongoURI = process.env.MONGODB_URI
const db = mongoose.connection;


/*======================
  MIDDLE-WARE
======================*/

app.set(`views engine`,`ejs`);
app.use(session({
  secret:"apL6kgcKHU2qv18G7H0h",
  resave: false,
  saveUninitialized: false
}))
app.use(express.urlencoded({extended: true}));
app.use(methodOverride(`_method`));
app.use(express.static(`public`));
app.use(`/characters`,charactersController);

/*======================
  MONGOOSE-CONNECTION
======================*/

mongoose.connect(mongoURI, {useNewURLParser: true}, () => {
  console.log(`The connection with MongoDB is established.`)
})

mongoose.connection.on(`error`,(err)=> console.log(err))

/*======================
  TO LISTEN
======================*/

app.get(`/`,(req,res)=>{
  res.render(`index.ejs`);
})

app.listen(portNum, () => {
  console.log(`Currently listening to PORT: `, portNum);
})