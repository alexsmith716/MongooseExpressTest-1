
var mongoose = require('mongoose');

var superBasicApiAppSchema = new mongoose.Schema({
    theText: {
        type: String,
        required: true
    }
});

// specify mongo collection name: 'superBasicApiAppCollection'
mongoose.model('SuperBasicApiAppModel', superBasicApiAppSchema, 'superBasicApiAppCollection');