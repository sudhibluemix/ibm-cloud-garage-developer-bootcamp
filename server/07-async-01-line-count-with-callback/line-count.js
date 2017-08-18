import fs from 'fs';

const lineCount = (filename, onError, onSuccess) => {
  const callback = (err, data) => {
    if (err) return onError('problem reading file: ' + filename);
    console.log(data);
    return onSuccess(data.toString().split('\n').length);
  };
  fs.readFile(filename, callback);

  console.log('hee');
};

export {lineCount};
