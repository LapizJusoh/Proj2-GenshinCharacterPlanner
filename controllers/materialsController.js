/*======================
  DEPENDENCIES
======================*/

const express = require(`express`);
const router = express.Router();
const Materials = require(`../models/materials.js`);
const Users = require(`../models/users.js`);
const MatSeed = require(`../models/materialSeed.js`)

/*======================
  ROUTERS
======================*/

//------ New

router.get(`/new`, (req, res) => {
  if(req.session.currentUser){
    res.render(`materials/new.ejs`,{userDetails: req.session.currentUser})
  } else {
    res.redirect(`/`)
  }
});

//------ Post

router.post(`/`, (req,res)=>{

  Materials.create(req.body,(err,newMat)=>{
    console.log
    if(err){
      console.log(`Encounted Error while CREATING new Material: `, err.message)
      res.send(err.message);
    } else {
      console.log(`Created new material. `,newMat);
      res.redirect(`/`)
    }
  })
})

//------ Show

router.get(`/:id`, (req, res) => {
  Materials.findById(req.params.id,(err,matDetails)=>{
    if(err){
      console.log(`Error encountered while GETTING data: `, err.message);
      res.redirect(`/`);
    } else {
      res.render(`materials/show.ejs`,{mat: matDetails, userDetails: req.session.currentUser});
    }
  })
});

//------ Edit

router.get(`/:id/edit`, (req, res) => {
  Materials.findById(req.params.id,(err,matSpecific)=>{
    if(err){
      console.log(`Error encountered while GETTING data. `,err.message);
      res.send(err.message);
    } else {
      if(req.session.currentUser){
        res.render(`materials/edit.ejs`,{mat: matSpecific,userDetails: req.session.currentUser})
      } else {
        res.redirect(`/`)
      }
    }
  })
});

//------ Update

router.put(`/:id`, (req,res)=>{

  Materials.findByIdAndUpdate(req.params.id,req.body,(err,updatedMat)=>{
    console.log
    if(err){
      console.log(`Encounted Error while UPDATING existing Character: `, err.message)
      res.send(err.message);
    } else {
      console.log(`Updated character details. `,updatedMat);
      res.redirect(`/materials/` + updatedMat.id);
    }
  })
})

//------ Delete

router.delete(`/:id`, (req, res) => {
  Materials.findByIdAndDelete(req.params.id,(err,deletedMat)=>{
    if(err){
      console.log(`Error encounted while DELETING data: `,err.message);
      res.send(err.message);
    }else{
      console.log(`Entry deleted. `,deletedMat);
      res.render(`characters/edit.ejs`);
    }
  })
  
  res.redirect(`/`);
});

//------ Seed Data

router.get(`/addSeed/forMaterialDB`, (req, res) => {
  Materials.create(MatSeed,(err)=>{
    if(err){
      console.log(`Error while seeding database: `, err.message);
      res.send(err.message);
    } else {
      console.log(`Created`)
    }
  })
  res.redirect(`/`);
});

router.get(`/delete/everything/i/am/sure`, (req, res) => {
  Materials.deleteMany({},(err)=>{
    if(err){
      console.log(`Error while seeding database: `, err.message)
      res.send(err.message);
    } else {
      console.log(`Deleted`)
    }
  })
  res.redirect(`/`);
});

router.get(`/drop/everything/and/reset/because/I/goofed/up`, (req,res) => {
  Materials.collection.drop((err)=>{
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