'use strict';

/**
 * @ngdoc function
 * @name flashApp.controller:CardController
 * @description
 * # CardCtrl
 * Controller of the flashApp
 */
angular.module('flashApp')
  .controller('CardController', function ($scope, question, cardfilter, activeOperator) {

	$scope.reset = function() {
		question.applyFilter();
	
		$scope.correct = 0;
		$scope.attempted = 0;
        	$scope.total = question.remaining();
		$scope.answer = '';
                $scope.finished = 0;
		
		$scope.question = question.next();
        };

	$scope.submitAnswer = function() {

		$scope.attempted += 1;

		var isCorrect = $scope.question.isCorrect($scope.answer);

		if (isCorrect) {
			$scope.correct += 1;
		}

		$scope.question = question.next($scope.question, isCorrect);
		$scope.answer = '';
                $scope.finished = Math.floor( $scope.correct / $scope.total * 100);
	};

	$scope.reset();	
  });
