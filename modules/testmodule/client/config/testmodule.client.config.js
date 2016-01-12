'use strict';

// Configuring the Articles module
angular.module('testmodule').run(['Menus',
  function (Menus) {
    // Add the Person dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Person',
      state: 'person',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'person', {
      title: 'List Persons',
      state: 'person.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'person', {
      title: 'New Person',
      state: 'person.new'
    });
  }
]);
