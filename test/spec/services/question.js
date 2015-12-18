'use strict';

describe('Service: question', function () {

  // load the service's module
  beforeEach(module('flashApp'));

  // instantiate service
  var question;
  var operator;

  beforeEach(inject(function (_question_, _operator_) {
    question = _question_;
    operator = _operator_;
  }));

  it('should return an addition question by default', function () {
    expect(!!question).toBe(true);
    var q = question.next();
    expect(!!q).toBe(true);    
    expect(q instanceof operator.Addition);
    expect(q.getFirstOperand(), 0);
    expect(q.getSecondOperand(), 0); 
  });

});
