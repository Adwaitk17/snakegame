// script.js

document.getElementById('checkButton').addEventListener('click', function() {
    var code = document.getElementById('codeTextArea').value;
    var outputFrame = document.getElementById('outputFrame');
    outputFrame.contentDocument.body.innerHTML = code;
  });
  