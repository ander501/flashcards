'use strict';

describe('Service: operator', function () {

  // load the service's module
  beforeEach(module('flashApp'));

  // instantiate service
  var operator;

  var question;

  beforeEach(inject(function (_operator_) {
    operator = _operator_;
  }));

  it('should do addition', function () {
    expect(!!operator).toBe(true);

    question = new operator.Addition(1, 2);

    expect(!!question).toBe(true);
    expect(question.operate()).toBe(3);
    expect(question.isCorrect('3')).toBe(true);
  });

  it('should do subtraction', function () {
    expect(!!operator).toBe(true);

    question = new operator.Subtraction(14, 7);

    expect(!!question).toBe(true);
    expect(question.operate()).toBe(7);
    expect(question.isCorrect('7')).toBe(true);
  });

  it('should do multiplication', function () {
    expect(!!operator).toBe(true);

    question = new operator.Multiplication(3, 7);

    expect(!!question).toBe(true);
    expect(question.operate()).toBe(21);
    expect(question.isCorrect('21')).toBe(true);
  });

  it('should do division', function () {
    expect(!!operator).toBe(true);

    question = new operator.Division(9, 3);

    expect(!!question).toBe(true);
    expect(question.operate()).toBe(3);
    expect(question.isCorrect('3')).toBe(true);
  });
});
