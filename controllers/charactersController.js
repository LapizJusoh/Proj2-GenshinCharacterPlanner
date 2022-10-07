/*======================
  DEPENDENCIES
======================*/

const express = require(`express`);
const bcrypt = require(`bcrypt`);
const router = express.Router();
const Characters = require(`../models/characters.js`);
const CharaSeed = require(`../models/seeds.js`)

/*======================
  ROUTERS
======================*/

//------ Index

router.get(`/`,(req,res)=>{
  Characters.find({},(err,characterData)=>{
    if(err){
      console.log(`Error while retrieving data: `, err.message)
    } else {
      res.render(`index.ejs`, {chara: characterData});
    }
  })
})

//------ New

router.get(`/new`, (req, res) => {
  res.render(`characters/new.ejs`);
});

//------ Post

router.post(`/`, (req,res)=>{

  Characters.create(req.body,(err,newChara)=>{
    console.log
    if(err){
      console.log(`Encounted Error while CREATING new Character: `, err.message)
      res.send(err.message);
    } else {
      console.log(`Created new character. `,newChara);
      res.redirect(`/`)
    }
  })
})

//------ Show

router.get(`/:id`, (req, res) => {
  Characters.findById(req.params.id,(err,charaDetails)=>{
    if(err){
      console.log(`Error encountered while GETTING data: `, err.message);
      res.send(err);
    } else {
      res.render(`characters/show.ejs`,{chara: charaDetails});
    }
  })
});

//------ Edit

router.get(`/:id/edit`, (req, res) => {
  Characters.findById(req.params.id,(err,charaSpecific)=>{
    if(err){
      console.log(`Error encountered while GETTING data. `,err.message);
      res.send(err.message);
    } else {
      res.render(`characters/edit.ejs`,{chara: charaSpecific})
    }
  })
});

//------ Update

router.put(`/:id`, (req,res)=>{

  Characters.findByIdAndUpdate(req.params.id,req.body,(err,updatedChara)=>{
    console.log
    if(err){
      console.log(`Encounted Error while UPDATING existing Character: `, err.message)
      res.send(err.message);
    } else {
      console.log(`Updated character details. `,updatedChara);
      res.redirect(`/characters/` + updatedChara.id);
    }
  })
})

//------ Delete

router.delete(`/:id`, (req, res) => {
  Characters.findByIdAndDelete(req.params.id,(err,deletedChara)=>{
    if(err){
      console.log(`Error encounted while DELETING data: `,err.message);
      res.send(err.message);
    }else{
      console.log(`Entry deleted. `,deletedChara);
      res.render(`characters/edit.ejs`);
    }
  })
  
  res.redirect(`/`);
});

//------ Seed Data

router.get(`/addSeed/forCharacterDB`, (req, res) => {
  Characters.create(CharaSeed,(err,characterData)=>{
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
  Characters.deleteMany({},(err,characterData)=>{
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
  Characters.collection.drop((err)=>{
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