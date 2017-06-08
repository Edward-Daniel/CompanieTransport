'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TransportSchema = new Schema({
  User:
  {
    type: String,
    Required: 'Field cannot be empty'
  },
  DateStart: {
    type: Date,
    default: Date.now
  },
  EndStart: {
    type: Date,
    default: Date.now
  },
  TransportStatus:
  {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  },
  EstimatedDistance: { type: String, Required: 'Field cannot be empty' },
  StartingAdress: { type: String, Required: 'Field cannot be empty' },
  DestinationAdress: { type: String, Required: 'Field cannot be empty' },
  CarNumber: { type: String, Required: 'Field cannot be empty' }
});

 var Transport = mongoose.model('transport', TransportSchema);


var SessionSchema = new Schema({
  User: { type: String, Required: 'Field cannot be empty' },
  SessionKey: { type: String, Required: 'Field cannot be empty' },
  SessionAdress: { type: String, Required: 'Field cannot be empty' },
  SessionUserAgent: { type: String, Required: 'Field cannot be empty' },
  SessionExpires: {
    type: Date,
    default: Date.now
  },
});

var Session = mongoose.model('session', SessionSchema);


var transportStatusSchema = new Schema({
  StatusDescription: { type: String, Required: 'Field cannot be empty' },
});

var TransportStatus = mongoose.model('transportStatus', transportStatusSchema);


var userSchema = new Schema({
  UserName: { type: String, Required: 'Field cannot be empty' },
  FirstName: { type: String, Required: 'Field cannot be empty' },
  LastName: { type: String, Required: 'Field cannot be empty' },
  Email: { type: String, Required: 'Field cannot be empty' },
  Adress: { type: String, Required: 'Field cannot be empty' },
  BirthDay: {
    type: Date,
    default: Date.now
  },
  Password: { type: String, Required: 'Field cannot be empty' },
  UserRole: { type: String, Required: 'Field cannot be empty' },
});

var User = mongoose.model('user', userSchema);


var userRoleSchema = new Schema({
  RoleDescription: { type: String, Required: 'Field cannot be empty' },
});

var UserRole = mongoose.model('userRole', userRoleSchema);
module.exports = {
    User: User,
    Transport: Transport,
    TransportStatus: TransportStatus,
    UserRole: UserRole,
    Session: Session
};