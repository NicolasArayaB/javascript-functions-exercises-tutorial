var dollarToEuro = function(dollarValue){
	return dollarValue * 0.89;
}
var euroToYen = function(euroValue){
	return euroValue * 124.15;
}
//***** YOUR CODE BELOW ******///

const dollarToYen = (dollarValue) => euroToYen(dollarToEuro(dollarValue));

console.log(dollarToYen(137))