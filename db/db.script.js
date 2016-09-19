////////////////////////
// Connection configs //
////////////////////////
var HOST = "localhost";
var PORT = 27017;
var DB_NAME = "nodedb";

var COLLECTION_NAME = {
    PERSONS : "people"
};

var pocDataServiceDB = connect(HOST + ":" + PORT + "/" + DB_NAME);

// Add new items
pocDataServiceDB[COLLECTION_NAME.PERSONS].insert([
{
    "_id" : "0",
    "name" : "Rickard",
    "surname" : "Stark",
    "spouse" : [],
    "dateBorn" : 0,
    "dateDeath" : 0,
    "description" : "",
    "childs" : ["1","2","3","4"]
},{
    "_id" : "1",
    "name" : "Eddard",
    "surname" : "Stark",
    "spouse" : ["9"],
    "dateBorn" : 0,
    "dateDeath" : 0,
    "description" : "",
    "childs" : ["191","192","193","194","195"]
},{
    "_id" : "2",
    "name" : "Brandon",
    "surname" : "Stark",
    "spouse" : [],
    "dateBorn" : 0,
    "dateDeath" : 0,
    "description" : "",
    "childs" : []
},{
    "_id" : "3",
    "name" : "Lyanna",
    "surname" : "Stark",
    "spouse" : [],
    "dateBorn" : 0,
    "dateDeath" : 0,
    "description" : "",
    "childs" : []
},{
    "_id" : "4",
    "name" : "Benjen",
    "surname" : "Stark",
    "spouse" : [],
    "dateBorn" : 0,
    "dateDeath" : 0,
    "description" : "",
    "childs" : []
},

// eddard stark family
{
    "_id" : "9",
    "name" : "Catelyn",
    "surname" : "Stark",
    "spouse" : ["1"],
    "dateBorn" : 0,
    "dateDeath" : 0,
    "description" : "",
    "childs" : []
},{
    "_id" : "191",
    "name" : "Robb",
    "surname" : "Stark",
    "spouse" : ["1911"],
    "dateBorn" : 0,
    "dateDeath" : 0,
    "description" : "",
    "childs" : []
},{
    "_id" : "1911",
    "name" : "Talisa",
    "surname" : "Stark",
    "spouse" : ["191"],
    "dateBorn" : 0,
    "dateDeath" : 0,
    "description" : "",
    "childs" : []
},{
    "_id" : "192",
    "name" : "Sansa",
    "surname" : "Stark",
    "spouse" : [],
    "dateBorn" : 0,
    "dateDeath" : 0,
    "description" : "",
    "childs" : []
},{
    "_id" : "193",
    "name" : "Arya",
    "surname" : "Stark",
    "spouse" : [],
    "dateBorn" : 0,
    "dateDeath" : 0,
    "description" : "",
    "childs" : []
},{
    "_id" : "194",
    "name" : "Bran",
    "surname" : "Stark",
    "spouse" : [],
    "dateBorn" : 0,
    "dateDeath" : 0,
    "description" : "",
    "childs" : []
},{
    "_id" : "195",
    "name" : "Rickon",
    "surname" : "Stark",
    "spouse" : [],
    "dateBorn" : 0,
    "dateDeath" : 0,
    "description" : "",
    "childs" : []
}]);
