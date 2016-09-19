var mongoose = require('mongoose'), Schema = mongoose.Schema
var personSchema = mongoose.Schema({
	_id: String,
    name: String,
    dateBorn: Number,
    dateDeath: Number,
    descript: String,
    age: Number,
  	job: String,
  	spouse : [{ type: String, ref: 'Person' }]
  	// child: [Hero];
});

var Person = mongoose.model('Person', personSchema);

module.exports = Person;