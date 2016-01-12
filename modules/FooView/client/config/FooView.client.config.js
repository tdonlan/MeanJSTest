'use strict';

angular.module('FooView').run(['Menus',
    function (Menus)
    {
        Menus.addMenuItem('topbar', {
            title: 'Foo',
            state: 'foo'
        });

    }

]);
