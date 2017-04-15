var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var MatchSchema = new Schema({	'player1' : {	 	type: Schema.Types.ObjectId,	 	ref: 'User'	},	'player2' : {	 	type: Schema.Types.ObjectId,	 	ref: 'User'	},	'player1Character' : String,	'player2Character' : String,	'player1EndStocks' : Number,	'player2EndStocks' : Number,	'winner' : String, // "player1" or "player2"	'date' : Date});

module.exports = mongoose.model('Match', MatchSchema);
