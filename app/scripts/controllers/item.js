'use strict';

/**
 * @ngdoc function
 * @name mealApp.controller:ItemCtrl
 * @description
 * # ItemCtrl
 * Controller of the mealApp
 */
angular.module('mealApp')
  .controller('ItemCtrl', ['$stateParams', 'foodFinder', function($stateParams, foodFinder) {

    this.data = foodFinder.getItem($stateParams.id);

  }]);
