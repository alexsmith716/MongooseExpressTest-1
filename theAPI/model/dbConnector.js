
var mongoose = require('mongoose');
var handleProcessTermination;

var dbURI = 'mongodb://localhost/SuperBasicApiApp';

// pass URI to connect method
mongoose.connect(dbURI);


// monitor mongoose connection events
// connection made
mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to: ' + dbURI);
});

mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose has disconnected');
});

handleProcessTermination = function(msg, callback) {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};

process.once('SIGUSR2', function() {
    handleProcessTermination('nodemon restart', function() {
        process.kill(process.pid, 'SIGUSR2');
    });
});


process.on('SIGINT', function() {
    handleProcessTermination('app termination', function() {
        process.exit(0);
    });
});


process.on('SIGTERM', function() {
    handleProcessTermination('Heroku app termination', function() {
        process.exit(0);
    });
});

require('./theSchema');