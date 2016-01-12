'use strict';

angular.module('FooView').config(['$stateProvider',
    function ($stateProvider) {
        $stateProvider
            .state('foo', {
                url: '/foo',
                templateUrl: 'modules/FooView/client/views/fooView.html'
            });

    }

]);
