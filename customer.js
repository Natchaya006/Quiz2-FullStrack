var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/quiz2";
var db;
MongoClient.connect(url, function (err, database) {
    if (err) throw err;
    db = database;
});
function findAll(req, res) {
    var query = {};
    db.collection("users").find(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result);
    });
}
function findUserByName(req, res) {
    var name = req.param('fname');
    var query = {studentName: name};
    db.collection("users").find(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result);
    });
}
function findRole(req, res) {
    var roleP = req.params.role;
    var query = {role: roleP};
    db.collection("users").find(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result);
    });
}
module.exports = {
    findAll: findAll,
    findUserByName: findUserByName,
    findRole: findRole
};

