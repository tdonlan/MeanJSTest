'use strict';

var wordGen = require('../controllers/wordGen.server.controller');

module.exports = function (app) {


    app.route('/api/getWeapon').all()
        .get(wordGen.getWeapon);

    app.route('/api/wordGen/getSyn').all()
        .get(wordGen.getSyn);

    app.get('/api/wordGen/getSyn/:word', function(req, res) {
        wordGen.getSynWord(req, res, req.params.word)
    })


    app.route('/api/wordGen/helloWorld').all()
        .get(wordGen.helloWorld);

};
