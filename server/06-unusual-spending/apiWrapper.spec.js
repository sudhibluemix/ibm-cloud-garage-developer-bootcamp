import {apiWrapper} from './apiWrapper';

describe('months', () => {
  it('canary test should always pass', () => {
    true.should.be.true();
  });
  it('test api', () => {
    const priorPayment = apiWrapper('user-id', 'prior-month');
    priorPayment.should.deepEqual([{
      amount: 500, category: 'shopping'}, {amount: 200, category: 'food'}]);

  });
});
