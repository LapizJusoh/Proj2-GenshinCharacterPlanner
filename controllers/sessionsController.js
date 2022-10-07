/*======================
  DEPENDENCIES
======================*/

const express = require(`express`);
const mongoose = require(`mongoose`);
const bcrypt = require(`bcrypt`);
const router = express.Router();
const Users = require(`../models/users.js`)

/*======================
  ROUTERS
======================*/

router.get(`/new`, (req,res)=>{
  res.render(`sessions/new.ejs`,{userDetails: req.session.currentUser});
})

router.post(`/`, (req,res)=>{
  Users.findOne({username:req.body.username},(err,userDetails)=>{
    if(err){
      console.log(`Unable to retrieve user credentials. `,err.message);
      res.send(err.message);
    }else{
      if(userDetails && bcrypt.compareSync(req.body.password,userDetails.password)){
        req.session.currentUser = userDetails;
        res.redirect(`/`);
      }else{
        res.send(`Invalid User ID or Password.`)
      }
    }
  })
})

router.delete(`/`,(req,res)=>{
  req.session.destroy(()=>{
    res.redirect(`/`);
  })
})


module.exports = router;