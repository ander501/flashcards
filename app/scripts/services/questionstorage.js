/*globals angular, Dexie*/
'use strict';

/**
 * @ngdoc service
 * @name flashApp.questionStorage
 * @description
 * # questionStorage
 * Service in the flashApp.
 */
angular.module('flashApp')
  .service('questionStorage', function (operator, datastorage) {

	var questionStorage = {};


	datastorage.on('populate', function (db) {
          makeAdditionQuestions(db);
	  makeSubtractionQuestions(db);
          makeMultiplicationQuestions(db);
          makeDivisionQuestions(db);
	});

	db.questions.hook('reading', function(obj) {
          var question;

         switch(obj.operation) {
		case operator.Addition.label:
		  question = new operator.Addition(obj.op1, obj.op2);
		  break;
		case operator.Subtraction.label:
                  question = new operator.Subtraction(obj.op1, obj.op2);
                  break;
                case operator.Multiplication.label:
                  question = new operator.Multiplication(obj.op1, obj.op2);
                  break;
                case operator.Division.label:
                  question = new operator.Division(obj.op1, obj.op2);
                  break;
		}
          question.id = obj.id;

          return question;
	});


        function makeAdditionQuestions(db) {
	  for(var i = 0; i <= 10; i++) {
            for(var j = 0; j < 10; j++) {
	      db.questions.add(new operator.Addition(i,j));
	    }
          }
        }

	function makeSubtractionQuestions(db) {
	  for(var i = 0; i <= 10; i++) {
            for(var j = 0; j < 10; j++) {
	      db.questions.add(new operator.Substraction(i+j,i));
	    }
          }
	}
	
	function makeMultiplicationQuestions(db) {
	  for(var i = 0; i <= 10; i++) {
            for(var j = 0; j < 10; j++) {
	      db.questions.add(new operator.Multiplication(i,j));
	    }
          }
        }

	function makeDivisionQuestions(db) {
	  for(var i = 1; i <= 10; i++) {
            for(var j = 0; j < 10; j++) {
	      db.questions.add(new operator.Division(i*j,i));
	    }
          }
        }

	questionStorage.add = function(question) {
          db.questions.add(question);
	};

        questionStorage.find = function(op, magnitudeRange) {
	  return db.questions
            .where('[label,magnitude]')
            .between([ op.label, magnitudeRange.min], [ op.label, magnitudeRange.max ])
            .toArray();
        };
 
	return questionStorage;
  });
