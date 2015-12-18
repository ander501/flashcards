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
      .state('drill', {
        url: '/drill',
        templateUrl: 'views/card.html',
        controller: 'CardController',
        controllerAs: 'card'
	})
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      });
  }]);
