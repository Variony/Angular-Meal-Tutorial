'use strict';

/**
 * @ngdoc function
 * @name mealApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the mealApp
 */
angular.module('mealApp')
  .controller('MenuCtrl', ['foodFinder', function (menu) {

    this.items = menu.getMenu();

    this.increment = function(item) {
      item.rating = ((item.rating * 10) + 1) / 10;
    };

    this.decrement = function(item) {
      item.rating = ((item.rating * 10) - 1) / 10;
    };

  }]);
