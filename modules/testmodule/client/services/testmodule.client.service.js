'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('testmodule').factory('Persons', ['$resource',
  function ($resource) {
    return $resource('api/listPersons');
  }
]);


angular.module('testmodule').factory('NewPerson', ['$resource',
  function ($resource) {
    return $resource('api/newPerson');
  }
]);
