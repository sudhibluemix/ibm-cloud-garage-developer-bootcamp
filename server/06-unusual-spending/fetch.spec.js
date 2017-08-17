import {replace, when} from '../../test-helper';

describe('fetch', () => {
  it('canary test should always pass', () => {
    true.should.be.true();
  });

  it('orchestrates months and an api wrapper', () => {
    //arrange
    const months = replace('./months');
    const apiWrapper = replace('./apiWrapper').apiWrapper;

    when(months.prior()).thenReturn('prior-month');
    when(months.current()).thenReturn('current-month');

    let priorPayments = ['prior-payment1', 'prior-payment2'];
    when(apiWrapper('user-id', 'prior-month')).thenReturn(priorPayments);
    let currentPayments = ['current-payment1', 'current-payment2'];
    when(apiWrapper('user-id', 'current-month')).thenReturn(currentPayments);

    let fetch = require('./fetch').fetch;

    //act
    fetch('user-id').should.deepEqual([
      {months: 'prior-month', payments: priorPayments},
      {months: 'current-month', payments: currentPayments}
    ]);

    //assert
    //verify();

  });
});
