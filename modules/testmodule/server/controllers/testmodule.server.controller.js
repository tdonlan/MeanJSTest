'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
    Person = mongoose.model('Person'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

exports.newPerson = function(req,res){

 var person = getPerson();
  return res.json(person);
};

exports.savePerson = function(req,res){
  var person = getPerson();

  person.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(person);
    }
  });

};

exports.listPersons = function(req,res){
  Person.find().exec(function (err, persons) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(persons);
    }
  });
};



exports.helloworld = function(req,res){
  return res.json('hello world from testmodule');
};

function getPerson(){
  var person = new Person();

  var name = getName();
  person.firstName = name.first;
  person.lastName = name.last;
  person.middleName = name.middle;
  person.phone = getPhone();
  person.email = getEmail(name);

  var address = getAddress();

  person.address1 = address.address1;
  person.city = address.city;
  person.state = address.state;
  person.zip = address.zip;

  return person;
}

function getName(){
  var fNames = ['Abe','Ben','Cal','Dave','Edgar','Fred','Gus','Hal','Icabod','Joseph','Ken','Lemmy','Montrose',
    'Newt','Opie','Patrick','Quincy','Rusty','Silva','Timmy','Ursula','Vlad','Winston','Xavier','Yaris','Zed'];
  var lNames = ['Amish','Boswell','Clancy','Davis','Mason','Nantucket','Putrice','Smith','Yost','Falloway'];

  var nameObject = {first:'',middle:'',last:''};
  nameObject.first = fNames[Math.floor(Math.random()*fNames.length)];
  nameObject.last = lNames[Math.floor(Math.random()*lNames.length)];

  nameObject.middle = String.fromCharCode(97 + Math.floor(Math.random()*26)).toUpperCase();


  return nameObject;
}

function getPhone(){
  return getNumber(3) + '-' + getNumber(3) + '-' + getNumber(4);
}

function getNumber(digits){

  var num = '';
  for(var i=0;i<digits;i++){
    num+=Math.floor(Math.random() * 9);
  }
  return num;
}


function getEmail(name){

  var emailProviders = ['gmail.com','hotmail.com','bigcorp.com','school.edu','fed.gov','state.gov'];
  var email = name.first.toString().substring(0,1).toLowerCase() + name.last.toString().toLowerCase() + '@' + emailProviders[Math.floor(Math.random()*emailProviders.length)];
  return email;
}

function getAddress(){
  var address = {address1:'',address2:'',city:'',state:'',zip:''};

  var locType = ['Ln','St','Rd','Ave','Pl','Blvd'];
  var locName = ['Oak','Granite','Washington','Prarie','Main','Residential'];

  var cityList = ['Atlanta','New York','Chicago','Los Angeles','Las Vegas','Seattle','San Francisco','Boston'];
  var stateList = ['GA','CA','NY','NC','AL','AK','PA','WA'];


  address.address1 = getNumber(1+ Math.floor(Math.random() * 4)) + ' ' + locName[Math.floor(Math.random()*locName.length)] + ' ' + locType[Math.floor(Math.random()*locType.length)];
  address.city = cityList[Math.floor(Math.random()*cityList.length)];
  address.state = stateList[Math.floor(Math.random()*stateList.length)];
  address.zip = getNumber(5);


  return address;

}
