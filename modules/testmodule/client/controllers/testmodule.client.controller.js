'use strict';

// Articles controller
angular.module('testmodule').controller('TestModuleController', ['$scope', '$stateParams', '$location', 'Authentication', 'Persons','NewPerson',
  function ($scope, $stateParams, $location, Authentication, Persons,NewPerson) {
    $scope.authentication = Authentication;

    var sortAscending = true;

    // Find a list of Articles
    $scope.find = function () {
      $scope.persons = Persons.query();
    };

    $scope.newPerson = function(){
      $scope.person = NewPerson.get();
    }

    $scope.sortNames = function(){
      sortAscending = !sortAscending;
      if(sortAscending){
        $scope.persons.sort(dynamicSort("lastName"));
      }
      else{
        $scope.persons.sort(dynamicSort("-lastName"));
      }
    }



    function dynamicSort(property) {
      var sortOrder = 1;
      if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
      }
      return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
      }
    }

  }
]);
