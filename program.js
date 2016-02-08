var theNumber = 1;
 
var michelangelo = function(value){
    value = (value * 2);
    return value;
}
 
var donatello = function(value, anotherValue){
    value = anotherValue + value;
    anotherValue = value * anotherValue;
    return anotherValue;

}
 
var leonardo = function(value){
    var anotherValue = value;
    value *= 4;
    theNumber = value / 2;
    //console.log("anotherValue: " + anotherValue);
    return (value + anotherValue);
}
 
var raphael = function(value, anotherValue, yetAnotherValue){
    value = value * anotherValue + yetAnotherValue;
    return yetAnotherValue;
}

var splinter = function(value1, value2){
  var z = value1 * value2;
  var array = [value1, value2, z];
  return array;
}
 
//In your email, tell me what the answer to this expression would be:
//console.log("Test 1: " + michelangelo(theNumber));

//console.log("Test 2: " + leonardo(theNumber));

var first = michelangelo(theNumber) + leonardo(theNumber);

console.log("first: " + first);

//console.log("theNumber = " + theNumber);
theNumber = theNumber * 2;
//console.log("theNumber = " + theNumber);
 
//In your email, tell me what the answer to this expression would be:
var second = (donatello(theNumber, 2)) - (raphael(3, 2, theNumber));

console.log("second: " + second);


console.log(splinter(1,2));