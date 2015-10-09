'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var WhatsitSchema = new Schema({
  name: String,
  classType: String,
  wheels: { type: Number, min: 1, max: 4 }
});

module.exports = mongoose.model('Whatsit', WhatsitSchema);