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
  .service('questionStorage', function (operator) {

	var questionStorage = {};

	var db = new Dexie("QuestionDatabase");

	db.version(1).stores({
	  questions : 'id++, label, op1, op2, [label,op2]'
	});

	db.open();

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

	questionStorage.add = function(question) {
          db.questions.add(question);
	};

        questionStorage.find = function(op, max, rangeOp1, rangeOp2) {
	  return db.questions.where('[label,op2]').between({ label : op.label, op2: op2.min }, { label: op.label, op2: op2.max });
        };
 
	return questionStorage;
  });
