var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var MatchSchema = new Schema({

module.exports = mongoose.model('Match', MatchSchema);