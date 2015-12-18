'use strict';
/*globals: angular*/

/**
 * @ngdoc service
 * @name flashApp.question
 * @description
 * # question
 * Serve the next question on the flashcards. 
 */
angular.module('flashApp')
	.service('question', function (operator) {

		var questions = [];

		var filter = function(question) {
		  return  ( question instanceof operator.Addition );
		};
	       
		var activeOperations = [ operator.Addition, operator.Subtraction, operator.Multiplication];

		var deck = new Queue();

		function makeQuestions() {
			angular.forEach(activeOperations, function(op) {
				var minOp1 = (op instanceof operator.Division) ? 1 : 0;	
				var maxOp1 = 10;
				var maxOp2 = maxOp1;
	
				for(var x = minOp1; x <= maxOp1; x++) {
					var minOp2 = x;
					for(var y = minOp2; y <= maxOp2; y++) {
						questions.push(new op(x,y));
					}
				}
			});
		}

		function applyFilter() {
			deck = new Queue();

			angular.forEach(questions, function(question) {
				if (filter(question)) {
					deck.enqueue(question);
				}
			});	
                }	

		function setFilter(newFilter) {
			filter = newFilter;
		}

		makeQuestions();
		applyFilter();
	
		return {
			next : function(lastQuestion, correct) {
				if (lastQuestion !== undefined) {
					if (!correct) {
						deck.enqueue(lastQuestion);
					}				
				}

				return deck.dequeue();
			},
			setFilter: setFilter,
			applyFilter: applyFilter
		};
	});
