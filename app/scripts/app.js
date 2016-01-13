'use strict';

/**
 * @ngdoc overview
 * @name flashApp
 * @description
 * # flashApp
 *
 * Main module of the application.
 */
angular
  .module('flashApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('practice', {
        url: '/practice',
        templateUrl: 'views/practice.html',
        controller: 'PracticeController',
        controllerAs: 'practice'
	})
      .state('practice.addition', {
	url: '/addition',
        templateUrl: 'views/card.html',
        controller: 'CardController',
        controllerAs: 'card',
	resolve: {
          activeOperator: function(operator) {
            return operator.Addition;
	  }}
        })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
  }]);
