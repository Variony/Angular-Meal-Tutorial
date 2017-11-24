'use strict';

/**
 * @ngdoc function
 * @name mealApp.controller:OrderCtrl
 * @description
 * # OrderCtrl
 * Controller of the mealApp
 */
angular.module('mealApp')
  .controller('OrderCtrl', ['orderManager', function (orderManager) {
    this.list = orderManager.getOrders();

    this.setActivity = function(day) {
      orderManager.setActivity(day);
    };

  }]);
