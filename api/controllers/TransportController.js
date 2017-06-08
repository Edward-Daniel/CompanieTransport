'use strict';


var mongoose = require('mongoose'),
  transport = mongoose.model('transport'),
  user = mongoose.model('user'),
  userRole = mongoose.model('userRole'),
  transportStatus = mongoose.model('transportStatus'),
  session = mongoose.model('session');

exports.list_all_transports = function (req, res) {
  transport.find({}, function (err, transport) {
    if (err)
      res.send(err);
    res.json(transport);
  });
};

exports.create_a_transport = function (req, res) {
  var new_transport = new transport(req.body);
  new_transport.save(function (err, transport) {
    if (err)
      res.send(err);
    res.json(transport);
  });
};


exports.read_a_transport = function (req, res) {
  transport.findById(req.params.transportId, function (err, transport) {
    if (err)
      res.send(err);
    res.json(transport);
  });
};


exports.update_a_transport = function (req, res) {
  transport.findOneAndUpdate(req.params.transportId, req.body, { new: true }, function (err, transport) {
    if (err)
      res.send(err);
    res.json(transport);
  });
};


exports.delete_a_transport = function (req, res) {
  transport.remove({
    _id: req.params.transportId
  }, function (err, transport) {
    if (err)
      res.send(err);
    res.json({ message: 'transport successfully deleted' });
  });
};


exports.list_all_users = function (req, res) {
  user.find({}, function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.create_a_user = function (req, res) {
  var new_user = new user(req.body);
  new_user.save(function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.read_a_user = function (req, res) {
  user.findById(req.params.userId, function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.update_a_user = function (req, res) {
  user.findOneAndUpdate(req.params.userId, req.body, { new: true }, function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.delete_a_user = function (req, res) {
  user.remove({
    _id: req.params.userId
  }, function (err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'user successfully deleted' });
  });
};


exports.list_all_userRoles = function (req, res) {
  userRoles.find({}, function (err, userRoles) {
    if (err)
      res.send(err);
    res.json(userRoles);
  });
};

exports.create_a_userRoles = function (req, res) {
  var new_userRoles = new userRoles(req.body);
  new_userRoles.save(function (err, userRoles) {
    if (err)
      res.send(err);
    res.json(userRoles);
  });
};


exports.read_a_userRoles = function (req, res) {
  userRoles.findById(req.params.userRolesId, function (err, userRoles) {
    if (err)
      res.send(err);
    res.json(userRoles);
  });
};


exports.update_a_userRole = function (req, res) {
  userRoles.findOneAndUpdate(req.params.userRolesId, req.body, { new: true }, function (err, userRoles) {
    if (err)
      res.send(err);
    res.json(userRoles);
  });
};


exports.delete_a_userRole = function (req, res) {
  userRoles.remove({
    _id: req.params.userRolesId
  }, function (err, userRoles) {
    if (err)
      res.send(err);
    res.json({ message: 'userRoles successfully deleted' });
  });
};


exports.list_all_transportStatus = function (req, res) {
  transportStatus.find({}, function (err, transportStatus) {
    if (err)
      res.send(err);
    res.json(transportStatus);
  });
};

exports.create_a_transportStatus = function (req, res) {
  var new_transportStatuss = new transportStatus(req.body);
  new_transportStatuss.save(function (err, transportStatus) {
    if (err)
      res.send(err);
    res.json(transportStatus);
  });
};


exports.read_a_transportStatus = function (req, res) {
  transportStatus.findById(req.params.transportStatusId, function (err, transportStatus) {
    if (err)
      res.send(err);
    res.json(transportStatus);
  });
};


exports.update_a_transportStatus = function (req, res) {
  transportStatus.findOneAndUpdate(req.params.transportStatusId, req.body, { new: true }, function (err, transportStatus) {
    if (err)
      res.send(err);
    res.json(transportStatus);
  });
};


exports.delete_a_transportStatus = function (req, res) {
  transportStatus.remove({
    _id: req.params.transportStatusId
  }, function (err, transportStatus) {
    if (err)
      res.send(err);
    res.json({ message: 'transportStatus successfully deleted' });
  });
};