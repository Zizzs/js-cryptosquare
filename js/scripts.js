//Business Logic
counter = 0;
temp = 0;
rotation = 0;
var cryptoArray = [];
var outputCryptoArray = [];
var finalOutputArray = [];
var cryptoCalc = function(userString) {
  //debugger;
  var userStringSplit = userString.split(" ");
  var userStringFiltered = userStringSplit.filter(userStringFiltered => userStringFiltered.length >= 1);
  var userStringJoined = userStringFiltered.join("");
  var userStringLength = userStringJoined.length;
  var squareRoot = Math.floor(Math.sqrt(userStringLength));
  //debugger;
  //Creates Arrays based on squareRoot Value.
  for (x = 0;x <= squareRoot; x++) {
    this["cryptoArray"+x] = userStringJoined.slice(0,squareRoot);
    userStringJoined = userStringJoined.slice(squareRoot);
  };
  // Adds the index[0] to output array of all arrays, then [1], then [1].
  while(counter <= squareRoot) {
    for (z = 0;z <= squareRoot; z++) {
      var tempCrypto = this["cryptoArray"+z];
      outputCryptoArray.push(tempCrypto[counter]);
    };
    counter++;
  };
  outputCryptoArray = outputCryptoArray.join('').toLowerCase();
  //Adds Spaces
  for (p=0;p <= (userStringLength/5);p++) {
    tempSplitArray = outputCryptoArray.slice(0,5);
    outputCryptoArray = outputCryptoArray.slice(5);
    finalOutputArray.push(tempSplitArray);
    finalOutputArray.push(" ");
  };
  finalOutputArray = finalOutputArray.join('');
  return finalOutputArray;

}



//User Interface Logic
$(document).ready(function() {
  $("form#formInput").submit(function(event) {
    event.preventDefault();
    var userString = $("textarea#userInput").val();
    cryptoCalc(userString);
    $("#userOutput").text(finalOutputArray);
  });
});
