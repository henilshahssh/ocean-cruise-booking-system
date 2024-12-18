
/*
Author : Henil Shah 103190205
Target: payment.html
Purpose: Assignment 2 - enhancements
*/

"use strict";

 function init()
{ 
	// Enchancement 1 
	var cardName = document.getElementById("cardName");
	cardName.value = localStorage.getItem("firstName") + " " + localStorage.getItem("lastName");
	
	// Enchancement 2 
	var cardLegend = document.getElementById("cardLegend");
	var cardType = document.getElementById("cardType");
	var cardName = document.getElementById("cardName");
	var cardNumber = document.getElementById("cardNumber");
	var cardExpiryDate = document.getElementById("cardExpiryDate");
	var cardCVVData = document.getElementById("cardCVVData");
	cardLegend.addEventListener("click", function(){
		cardType.value = "none";
		cardName.value = "";
		cardNumber.value = "";
		cardExpiryDate.value = "";
		cardCVVData.value = "";
	});
}

window.addEventListener("load",init);