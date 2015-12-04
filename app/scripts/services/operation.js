'use strict';

/**
 * @ngdoc service
 * @name flashApp.operation
 * @description
 * # operation
 * Constant in the flashApp.
 */
angular.module('flashApp')
  .constant('operation', {
	ADDITION: 'addition',
	SUBTRACTION: 'subtraction',
	MULTIPLICATION: 'multiplication',
        DIVISION: 'division'
	});
