import {lineCount} from './line-count';

describe.only('11111line count', () => {
  it('for file —— line-count.js —— should be 13', () => {
    function onSuccess(lines) {
            console.log('Ram' + lines);
            lines.should.equal(2929292);
    }
    function onError(errorMessage) {
      errorMessage.should.equal('problem reading file: is-not-there.js');
    }
    lineCount('server/07-async-01-line-count-with-callback/line-count.js', null, onSuccess );
  });

  it('for file —— is-not-there.js —— should be problem reading file: ' +
      'is-not-there.js');
});
