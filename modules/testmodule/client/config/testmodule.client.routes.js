'use strict';

// Setting up route
angular.module('testmodule').config(['$stateProvider',
  function ($stateProvider) {
    // Articles state routing
    $stateProvider
      .state('person', {
        abstract: true,
        url: '/testmodule',
        template: '<ui-view/>'
      })
      .state('person.list', {
        url: '',
        templateUrl: 'modules/testmodule/client/views/listPersons.client.view.html'
      })
      .state('person.new', {
        url: '/new',
        templateUrl: 'modules/testmodule/client/views/newPerson.client.view.html'
      });

  }
]);
