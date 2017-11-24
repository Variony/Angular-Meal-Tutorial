'use strict';

/**
 * @ngdoc service
 * @name mealApp.orderManager
 * @description
 * # orderManager
 * Service in the mealApp.
 */
angular.module('mealApp')
  .service('orderManager', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var selectedDay = 'Monday';
    var orderSelection = {
      Monday: {
        breakfast: '',
        lunch: '',
        dinner: ''
      },
      Tuesday: {
        breakfast: '',
        lunch: '',
        dinner: ''
      },
      Wednesday: {
        breakfast: '',
        lunch: '',
        dinner: ''
      },
      Thursday: {
        breakfast: '',
        lunch: '',
        dinner: ''
      },
      Friday: {
        breakfast: '',
        lunch: '',
        dinner: ''
      },
    };

    this.getActivity = function() {
      return selectedDay;
    };

    this.setActivity = function(day) {
      selectedDay = day;
    };

    this.getOrders = function() {
      return orderSelection;
    };

    this.chooseMenuOption = function(meal, menuItem) {
      orderSelection[selectedDay][meal] = menuItem;
    };

    this.removeMenuOption = function(day, menuCategory) {
      orderSelection[day][menuCategory] = '';
    };

  });
