'use strict';

var wordGen = require('../controllers/wordGen.server.controller');

module.exports = function (app) {


    // Articles collection routes
    app.route('/api/wordGen/getSyn').all()
        .get(wordGen.getSyn);

    app.route('/api/wordGen/helloWorld').all()
        .get(wordGen.helloWorld);

};
