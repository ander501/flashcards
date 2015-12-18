'use strict';

/**
 * @ngdoc function
 * @name flashApp.controller:CardController
 * @description
 * # CardCtrl
 * Controller of the flashApp
 */
angular.module('flashApp')
  .controller('CardController', function ($scope, question) {

	$scope.question = question.next();

	$scope.answer = '';

	$scope.correct = 0;

	$scope.attempted = 0;

	$scope.submitAnswer = function() {

		$scope.attempted += 1;

		var isCorrect = $scope.question.isCorrect($scope.answer);

		if (isCorrect) {
			$scope.correct += 1;
		}

		$scope.question = question.next($scope.question, isCorrect);
		$scope.answer = '';
	};
	
  });
