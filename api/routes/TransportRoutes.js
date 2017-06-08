'use strict';
module.exports = function(app) {
  var functionsList = require('../controllers/TransportController');

  app.route('/transport')
    .get(functionsList.list_all_transports)
    .post(functionsList.create_a_transport);


  app.route('/transports/:transportId')
    .get(functionsList.read_a_transport)
    .put(functionsList.update_a_transport)
    .delete(functionsList.delete_a_transport);

  app.route('/user')
    .get(functionsList.list_all_users)
    .post(functionsList.create_a_user);


  app.route('/user/:userId')
    .get(functionsList.read_a_user)
    .put(functionsList.update_a_user)
    .delete(functionsList.delete_a_user);

  app.route('/userRoles')
    .get(functionsList.list_all_userRoles)
    .post(functionsList.create_a_userRoles);


  app.route('/user/:userId')
    .get(functionsList.read_a_userRoles)
    .put(functionsList.update_a_userRole)
    .delete(functionsList.delete_a_userRole);

  app.route('/transportStatus')
    .get(functionsList.list_all_transportStatus)
    .post(functionsList.create_a_transportStatus);


  app.route('/transportStatus/:transportStatusId')
    .get(functionsList.read_a_transportStatus)
    .put(functionsList.update_a_transportStatus)
    .delete(functionsList.delete_a_transportStatus);

};