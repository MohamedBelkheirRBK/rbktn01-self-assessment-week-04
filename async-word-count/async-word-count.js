var fs = require('fs');
var path = require('path');

var getWordCount = function(filePath, callback) {
  fs.readFile(filePath, 'utf-8', function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    var wordCount = data.trim().split(' ').length;
    callback(null, wordCount);
  });
};

var getTotalWordCount = function(callback, ...files) {
  var counter = 0;
  var words = 0;

  dataCollector = (err, data)=>{
    if(err) throw err;

    words += data;
    counter++;
    if(counter == 2)
      callback(words)

  }

  files.forEach(file => {
    getWordCount(file, dataCollector)
  })
  
};

module.exports = getTotalWordCount;

getTotalWordCount(data=>{
  console.log(data)
}, './async-word-count/files/fileOne.txt', './async-word-count/files/fileTwo.txt')
