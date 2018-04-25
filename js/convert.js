
//converts euro to pounds
function euroToPounds() {
	
	var amount = parseInt(document.getElementById("value1").value);
	var pounds = amount * 0.86;
	  
	var message = amount + ' euros converts to ' + pounds + ' sterling.';
	console.log(message);
	document.getElementById("resultsentence").innerHTML = message;
}	
//converts euro to dollars
function euroToUSDollars() {
		
	var amount = parseInt(document.getElementById("value2").value);
	var US Dollars = amount * 1.06;
	 
	var message = amount + ' euros converts to ' + US dollars + ' dollars.';
	console.log(message);
	document.getElementById("resultsentence").innerHTML = message;
}	
//converts euro to yen
function euroToJapaneseYen() {
		
	var amount = parseInt(document.getElementById("value3").value);
	var Japanese Yen = amount * 121.12;
	  
	var message = amount + ' euros converts to ' + Japanese Yen + ' Yen.';
	console.log(message);
	document.getElementById("resultsentence").innerHTML = message;
} 
//converts euro to bitcoin
function euroToBitcoin() {
		
	var amount = parseInt(document.getElementById("value4").value);
	var Bitcoin = amount * 0.00082;
	  
	var message = amount + ' euros converts to ' + Bitcoin + ' Bitcoin.';
	console.log(message);
	document.getElementById("resultsentence").innerHTML = message;
	
}