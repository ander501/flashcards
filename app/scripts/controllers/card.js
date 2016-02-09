'use strict';

/**
 * @ngdoc function
 * @name flashApp.controller:CardController
 * @description
 * # CardCtrl
 * Controller of the flashApp
 */
angular.module('flashApp')
  .controller('CardController', function ($scope, questionStorage, Bag, cardfilter, activeOperator) {

	var deck = new Bag();
        
	$scope.reset = function() {
		questionStorage.find(activeOperator, 20).then(function(questions){
			questions.forEach(function(question) {
				deck.push(question);
			});
		}).then(function() {
	
			$scope.correct = 0;
			$scope.attempted = 0;
        		$scope.total = deck.size();
			$scope.answer = '';
                	$scope.finished = 0;
		
			$scope.question = deck.pop();
		});
        };

	$scope.submitAnswer = function() {

		$scope.attempted += 1;

		var isCorrect = $scope.question.isCorrect($scope.answer);

		if (isCorrect) {
			$scope.correct += 1;
		} else {
			deck.push($scope.question);
		}

		$scope.question = deck.pop();
		$scope.answer = '';
                $scope.finished = Math.floor( $scope.correct / $scope.total * 100);
	};

	$scope.reset();	
  });
