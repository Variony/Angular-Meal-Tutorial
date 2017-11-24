'use strict';

/**
 * @ngdoc overview
 * @name mealApp
 * @description
 * # mealApp
 *
 * Main module of the application.
 */
angular
  .module('mealApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'views/menu.html',
      controller: 'MenuCtrl as menu'
    }).state('item', {
      url: '/item/:id',
      templateUrl: 'views/item.html',
      controller: 'ItemCtrl as item'
    });

  }]);
