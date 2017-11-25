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
        rating: 4.1,
      },
      {
        id: 'Strawberry-pudding',
        name: 'Strawberry Pudding',
        img: 'Strawberry-pudding.jpg',
        calories: 200,
        rating: 5,
      },
      {
        id: 'ham-goat-cheese-croissant',
        name: 'Ham and Goat Croissant',
        img: 'ham-goat-cheese-croissant.jpg',
        calories: 430,
        rating: 4.1,
      },
    ];

    var items = {

      'chicken-pomegranate-salad': {
        id: 'chicken-pomegranate-salad',
        name: 'Chicken Pomegrnate Salad',
        img: 'chicken-pomegranate-salad.jpg',
        calories: 430,
        rating: 4.1,
        reviews: ['this is so good', 'i like it']
      },

      'Strawberry-pudding': {
        id: 'Strawberry-pudding',
        name: 'Strawberry Pudding',
        img: 'Strawberry-pudding.jpg',
        calories: 200,
        rating: 5,
        reviews: ['this is so good', 'i like it']
      },

    'ham-goat-cheese-croissant': {
        id: 'ham-goat-cheese-croissant',
        name: 'Ham and Goat Croissant',
        img: 'ham-goat-cheese-croissant.jpg',
        calories: 430,
        rating: 4.1,
        reviews: ['this is so good', 'i like it']
      },
    };


      this.getMenu = function() {
        return menu;
      }

      this.getItem = function(id) {
        return items[id];
      }

  });
