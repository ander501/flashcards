'use strict';

/**
 * @ngdoc service
 * @name flashApp.operator
 * @description
 * # operator
 * Factory in the flashApp.
 */
angular.module('flashApp')
  .factory('operator', ['operation', function (operation) {

    function BinaryOperator(op1, op2) {
	this.setOperands(op1, op2);
    }
  
    BinaryOperator.prototype.setOperands = function(op1, op2) {
      this.op1 = op1;
      this.op2 = op2;
    };

    BinaryOperator.prototype.getFirstOperand = function() {
       return this.op1;
    };

    BinaryOperator.prototype.getSecondOperand = function() {
       return this.op1;
    };

    function Addition(op1, op2) {
	this.setOperands(op1, op2);
    }

    function Subtraction(op1, op2) {
	this.setOperands(op1, op2);
    }

    function Multiplication(op1, op2) {
	this.setOperands(op1, op2);
    }

    function Division(op1, op2) {
	if (op2 === 0) {
	    throw new DivisionByZeroException(op2);
	}
	this.setOperands(op1, op2);
    }

    Addition.prototype = Object.create(BinaryOperator.prototype);
    Subtraction.prototype = Object.create(BinaryOperator.prototype);
    Multiplication.prototype = Object.create(BinaryOperator.prototype);
    Division.prototype = Object.create(BinaryOperator.prototype);

    Addition.prototype.symbol = '+';
    Subtraction.prototype.symbol = '-';
    Multiplication.prototype.symbol = '';
    Division.prototype.symbol = '';

    Addition.prototype.operate = function() { return this.op1 + this.op2; };
    Subtraction.prototype.operate = function() { return this.op1 - this.op2; };
    Multiplication.prototype.operate = function() { return this.op1 * this.op2; };
    Division.prototype.operate = function() { return this.op1 / this.op2; };

    function DivisionByZeroException(value) {
      this.value = value;
      this.message = 'division by zero is undefined';
      this.toString = function() {
        return 'DivisionByZeroException: ('+ this.value + '), ' + this.message;
      };
    }	

    function UnknownOperationException(value) {
	this.value = value;
        this.message = 'is an unknown operation';
        this.toString = function() {
          return this.value + ' ' + this.message;
        };
    }

    return {
      makeOperator : function(op, op1, op2) { 
        switch (op) {
	case operation.ADDITION:
	  return new Addition(op1, op2);
	case operation.SUBTRACTION:
          return new Subtraction(op1, op2);
        case operation.MULTIPLICATION:
          return new Multiplication(op1, op2);
        case operation.DIVISION:
          return new Division(op1, op2);
	default: 
	  throw new UnknownOperationException(op);
	}
      }
    };
  }]);
