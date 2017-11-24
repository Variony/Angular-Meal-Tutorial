'use strict';

/**
 * @ngdoc service
 * @name mealApp.foodFinder
 * @description
 * # foodFinder
 * Service in the mealApp.
 */
angular.module('mealApp')
  .service('foodFinder', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var menu = [
      {
        id: 'chicken-pomegranate-salad',
        name: 'Chicken Pomegrnate Salad',
        img: 'chicken-pomegranate-salad.jpg',
        calories: 430,
        rating: 4.1
      },
      {
        id: 'Strawberry-pudding',
        name: 'Strawberry Pudding',
        img: 'Strawberry-pudding.jpg',
        calories: 200,
        rating: 5
      },
      {
        id: 'ham-goat-cheese-croissant',
        name: 'Ham and Goat Croissant',
        img: 'ham-goat-cheese-croissant.jpg',
        calories: 430,
        rating: 4.1
      },
    ];

      this.getMenu = function() {
        return menu;
      }
  });
