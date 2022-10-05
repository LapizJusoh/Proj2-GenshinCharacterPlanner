/*======================
  DEPENDENCIES
======================*/

const express = require(`express`);
const mongoose = require(`mongoose`);
const bcrypt = require(`bcrypt`);
const router = express.Router();
const Characters = require(`../models/characters.js`);