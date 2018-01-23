'use strict';
const mongo = require('mongodb');
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const MusicSchema = new Schema ({
  album: {type: String, default: '', required: true},
  artist: {type: String, default: '', required: true},
  artwork: {type: String, default: ''},
  genre: {type: String, default: ''},
  itunesLink: {type: String, default: ''},
  rating: {type: Number, min: 1, max: 5, default: '', required: true},
  user: {type: String, required: true}
});


var MusicInput = mongoose.model('MusicSchema', MusicSchema);

module.exports = {MusicInput};