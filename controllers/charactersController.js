const express = require(`express`);
const router = express.Router();
const Characters = require(`../models/characters.js`);

router.get(`/`,(req,res)=>{
  res.render(`characters.index.ejs`)
})

router.get(`/new`, (req, res) => {
  res.render(``);
});

module.exports = router;