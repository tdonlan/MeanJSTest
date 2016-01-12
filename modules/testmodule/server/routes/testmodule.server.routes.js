'use strict';

/**
 * Module dependencies.
 */
var testmodule = require('../controllers/testmodule.server.controller');

module.exports = function (app) {

    app.route('/api/newPerson').all()
        .get(testmodule.newPerson);

    app.route('/api/savePerson').all()
        .post(testmodule.savePerson);

    app.route('/api/listPersons').all()
        .get(testmodule.listPersons);

  //hello world get
  app.route('/api/testmodule').all()
      .get(testmodule.helloworld);

};
