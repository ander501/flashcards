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
	.service('question', function (operator, Bag) {

		var questions = [];

		var filter = function(question) {
		  return  ( question instanceof operator.Addition );
		};
	       
		var activeOperations = [ operator.Addition, operator.Subtraction, operator.Multiplication];

		var deck = new Bag();

                var comparison = function(question1, question2) {
			return question2.index - question1.index;
		};

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

                function remaining() {
			return deck.size();
		}

		function applyFilter() {
			deck = new Bag();

			angular.forEach(questions, function(question) {
				if (filter(question)) {
					deck.push(question);
				}
			});	
                }	

		function setFilter(newFilter) {
			filter = newFilter;
		}

                function setComparison(compareFunction) {
			comparison = compareFunction;
		}

		makeQuestions();
		applyFilter();
	
		return {
			next : function(lastQuestion, correct) {
				if (lastQuestion !== undefined) {
					if (!correct) {
						deck.push(lastQuestion);
					}				
				}

				return deck.pop();
			},
			remaining: remaining,			
			setFilter: setFilter,
			applyFilter: applyFilter,
                        setComparison: setComparison
		};
	});
