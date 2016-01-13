'use strict';

/**
 * @ngdoc service
 * @name flashApp.bag
 * @description
 * # bag
 * Factory in the flashApp.
 */
angular.module('flashApp')
  .factory('Bag', function () {

    function BagEmptyException() {
	this.message = "Attempted to extract an item from an empty bag";
        this.toString = function() {
		return "BagEmptyException: " + this.message;
	}

    }

    BagEmptyException.prototype = new Error();

    function Bag() {

	var vector = [];

	this.push = function(item) { vector.push(item); };

        this.pop = function() {

		if (this.isEmpty()) {
			throw new BagEmptyException();	
		}

		var index = Math.floor(Math.random() * vector.length);
		var swap = vector[index];
                
		vector[index] = vector[vector.length - 1];
                vector[vector.length -1] = swap;

		return vector.pop();
        };

        this.clear = function() {
		vector = [];
	};

	this.isEmpty = function() {
		return !(vector.length > 0);
        };

	this.size = function() {
		return vector.length;
        };

	return this;
    }

    Bag.prototype.EmptyException = BagEmptyException;

    // Public API here
    return Bag;
  });
