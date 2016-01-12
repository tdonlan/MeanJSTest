'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

//Person Schema

var PersonSchema = new Schema({
  firstName: {type: String, default: '', required: 'First Name required'},
  lastName: {type: String, default: '', required: 'Last Name required'},
  middleName: {type: String, default: ''},
  address1: {type: String, default: ''},
  address2: {type:String,default:''},
  city: {type:String,default:''},
  state: {type:String,default:''},
  zip:{type:String,default:''},
  phone: {type:String,default:''},
  email:{type:String,default:''}
});

mongoose.model('Person', PersonSchema);

