
var request = require('request');
var apiOptions = {
  server : "http://localhost:3000"
};

if (process.env.NODE_ENV === 'production') {
  //apiOptions.server = "https://-------.herokuapp.com";
}

var renderCallbackData = function(req, res, responseBody){
  var responseMessage;
  if (!(responseBody instanceof Array)) {
    responseMessage = "API path error!";
    responseBody = [];
  } else {
    if (!responseBody.length) {
      responseMessage = "No data found!";
    }
  }
  
  res.render('appIndexPage', {
    title: 'SuperBasicApiApp',
    pageHeader: {
      title: 'Basic GET request example (Express & Mongoose).'
    },
    responseBody: responseBody,
    responseMessage: responseMessage
  });
};

<!-- +++++++++++++++++++++++++++++++++++++++++++ -->

module.exports.indexView = function(req, res){
  var requestOptions, path;
  path = '/api/apicontrollers';

  requestOptions = {
    url : apiOptions.server + path,
    method : "GET",
    json : {}
  };
  
  request(requestOptions, function(err, response, body) {
      var i, data;
      data = body;
      renderCallbackData(req, res, data);
    }
  );
};