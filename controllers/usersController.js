/*======================
  DEPENDENCIES
======================*/

const express = require(`express`);
const bcrypt = require(`bcrypt`);
const router = express.Router();
const Users = require(`../models/users.js`);

/*======================
  ROUTERS
======================*/

//------ New

router.get(`/new`, (req,res)=>{
  res.render(`users/new.ejs`)
})

//------ Post

router.post(`/`, (req,res)=>{
  
  req.body.password = bcrypt.hashSync(
    req.body.password,
    bcrypt.genSaltSync(10)
  );

  Users.create(req.body,(err,newUser)=>{
    if(err){
      console.log(`Encountered error while POSTING data.`);
      res.send(err.message)
    } else {
      console.log(`New user created. `, newUser);
      res.redirect(`/`);
    }
  })
})

router.get(`/drop/everything/and/reset/because/I/goofed/up`, (req,res) => {
  Users.collection.drop((err)=>{
    if(err){
      console.log(`Error while removing collection: `,err.message);
      res.send(err.message);
    } else {
      console.log(`Collection Dropped.`);
      res.redirect(`/`);
    }
  })
})

module.exports = router;