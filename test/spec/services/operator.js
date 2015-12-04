'use strict';

describe('Service: operator', function () {

  // load the service's module
  beforeEach(module('flashApp'));

  // instantiate service
  var operator;
  var operation;

  var question;

  beforeEach(inject(function (_operator_, _operation_) {
    operator = _operator_;
    operation = _operation_;
  }));

  it('should do addition', function () {
    expect(!!operator).toBe(true);

    question = operator.makeOperator(operation.ADDITION, 1, 2);

    expect(!!question).toBe(true);
    expect(question.operate()).toBe(3);
  });

  it('should do subtraction', function () {
    expect(!!operator).toBe(true);

    question = operator.makeOperator(operation.SUBSTRACTION, 14, 7);

    expect(!!question).toBe(true);
    expect(question.operate()).toBe(7);
  });
  it('should do multiplication', function () {
    expect(!!operator).toBe(true);

    question = operator.makeOperator(operation.MULTIPLCATION, 3, 7);

    expect(!!question).toBe(true);
    expect(question.operate()).toBe(21);
  });
  it('should do division', function () {
    expect(!!operator).toBe(true);

    question = operator.makeOperator(operation.DIVISION, 9, 3);

    expect(!!question).toBe(true);
    expect(question.operate()).toBe(3);
  });
});
