import {lineCount} from './line-count';

const filespec = 'server/08-async-02-line-count-with-promise/line-count.js';

describe.only('line count can be checked', () => {

  it('with the done parameter like with a callback', (done) => {
    function onSuccess(lines) {
      lines.should.equal(14);
      done();
    }

    lineCount(filespec).then(onSuccess);
  });

  it('by returning the promise after .then', () => {
    function onSuccess(lines) {
          lines.should.equal(14);
        }

        return lineCount(filespec).then(onSuccess);

  });

  it('by using eventually or fulfilledWith', () => {
    return lineCount(filespec).should.eventually.equal(14);

  });
});
