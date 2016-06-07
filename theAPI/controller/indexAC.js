
var mongoose = require('mongoose');
var MongooseModel = mongoose.model('SuperBasicApiAppModel');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.basicApiList = function(req, res) {
  MongooseModel.find({}, function (err, results) {
    var responseBody;
    if (err) {
      console.log('Mongoose find error:', err);
      sendJSONresponse(res, 404, err);
    } else {
      responseBody = buildBasicApiList(req, res, results);
      sendJSONresponse(res, 200, responseBody);
    }
  });

};

var buildBasicApiList = function(req, res, results) {
  var responseBody = [];
  results.forEach(function(doc) {
    responseBody.push({
      theText: doc.theText,
      _id: doc._id
    });
  });
  return responseBody;
};

// http://localhost:3000/api/favplaces?favplaceid=574c695ced98aeaca4cf126c

// id: 574c695ced98aeaca4cf126c
// api/favplaces?lng=-73.977613&lat=40.752220