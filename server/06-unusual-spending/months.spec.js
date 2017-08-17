import * as months from './months';

describe.only('months', () => {
  it('canary test should always pass', () => {
    true.should.be.true();
  });
  it('test months prior', () => {
    const priormonths = months.prior();
    priormonths.should.deepEqual({year: 2017, month: 7});
  });

  it('test months current', () => {
    const currentmonths = months.current();
    currentmonths.should.deepEqual({year: 2017, month: 8});
  });
});

