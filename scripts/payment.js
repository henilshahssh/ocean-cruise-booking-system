
/*
Author : Henil Shah 103190205
Target: payment.html
Purpose: Assignment 2 - basic requirements
*/

"use strict";

function validateCardDetails()
{
	var errorMsg = "";
	var result = true;
	var cardName = document.getElementById("cardName").value.trim();					
	var cardNumber = document.getElementById("cardNumber").value.trim();			
	var cardType = document.getElementById("cardType").value.trim();			
	var cardExpiryDate = document.getElementById("cardExpiryDate").value.trim();			
	var cardCVVData = document.getElementById("cardCVVData").value.trim();						

	
	if (cardCVVData == ""){
		errorMsg += "CVV cannot be empty.\n";								
		result = false;
	}
	else if (!(cardCVVData.match(/^\d{3}$/))){
		errorMsg += "CVV must be 3 digits.\n";							
		result = false;
	}
	
	if(cardType == "none"){
		errorMsg += "Please select a valid card option.\n";
		result = false;
	}
	
	if (cardExpiryDate == ""){
		errorMsg += "Card expiry date cannot empty.\n";					
		result = false;
	}
	else if (!(cardExpiryDate.match(/^\d{2}-\d{2}$/))){									
		errorMsg += "Enter expiry date in the given format: mm-yy.\n";
		result = false;
	}

	switch (cardType){
		case "visa": 																							
			if (cardNumber[0] != "4"){																			
				errorMsg += "Visa card first number must be 4.\n";
				result = false;
			}
			else if (!(cardNumber.match(/^\d{16}$/))){															
				errorMsg += "Visa card number must be 16 digits.\n";
				result = false;
			}
			break;
			
		case "masterCard": 																							
			if (!(cardNumber[0] == "5" && (Number(cardNumber[1]) >= 1 && Number(cardNumber[1]) <= 5))){			
				errorMsg += "MasterCard must start with digits 51 to 55.\n";
				result = false;
			}
			else if (!(cardNumber.match(/^\d{16}$/))){															
				errorMsg += "MasterCard number must be 16 digits.\n";
				result = false;
			}
			break;
			
		case "amex": 																							
			if (!(cardNumber[0] == "3" && (cardNumber[1] == "4" || cardNumber[1] == "7"))){						
				errorMsg += "American Express must start with 34 or 37.\n";
				result = false;
			}
			else if (!(cardNumber.match(/^\d{15}$/))){															
				errorMsg += "MasterCard number must be 15 digits.\n";
				result = false;
			}
			break;
	}
	
	if (cardName == ""){
		errorMsg += "Name of card cannot be empty.\n";
		result = false;
	}
	else if (cardName.length > 40){											
		errorMsg += "Card name length cannot exceed 40 characters"
		result = false;
	}
	else if (!(cardName.match(/^[a-zA-Z ]+$/))){							
		errorMsg += "Card name can only have alphabetical characters.\n";
		result = false;
	}

	if (errorMsg != "")	 alert(errorMsg);												
		
	return result;
}

function clearOrder(){			 
	localStorage.clear();
	location.href="index.html";
}

function retrieveData()
{
	if (typeof(Storage)!=="undefined")
	{			
		if ("firstName" in localStorage) // 
		{
			document.getElementById("fullName").textContent = localStorage.getItem("firstName") + " " + localStorage.getItem("lastName");
			document.getElementById("email").textContent = localStorage.getItem("email");
			document.getElementById("address").textContent = localStorage.getItem("streetAddress");
			document.getElementById("suburb").textContent = localStorage.getItem("suburb");
			document.getElementById("phoneNumber").textContent = localStorage.getItem("phoneNumber");
			document.getElementById("state").textContent = localStorage.getItem("stateSelected");
			document.getElementById("postCode").textContent = localStorage.getItem("postCode");
			
			document.getElementById("comment").textContent = localStorage.getItem("comment");
			document.getElementById("dealsSelected").textContent = localStorage.getItem("chosenProduct");
			document.getElementById("quantity").textContent = localStorage.getItem("quantity");
			
			var amountOfDeal = document.getElementById("dealsSelected").textContent;
			amountOfDeal = Number(amountOfDeal.substr(amountOfDeal.length-3));
			var totalCost = document.getElementById("totalCost");
			totalCost.textContent = String(amountOfDeal * Number(document.getElementById("quantity").textContent));
			// 
			
			document.getElementById("firstNamePush").value = localStorage.getItem("firstName");	 
			document.getElementById("lastNamePush").value = localStorage.getItem("lastName");
			document.getElementById("emailPush").value = localStorage.getItem("email");
			document.getElementById("addressPush").value = localStorage.getItem("streetAddress");
			document.getElementById("suburbPush").value = localStorage.getItem("suburb");
			document.getElementById("phonePush").value = localStorage.getItem("phoneNumber");
			document.getElementById("statePush").value = localStorage.getItem("stateSelected");
			document.getElementById("postCodePush").value = localStorage.getItem("postCode");
			document.getElementById("commentPush").value = localStorage.getItem("comment");
			document.getElementById("costPush").value = "$" + totalCost.textContent;
		}
	}
}

function init()
{ 
	retrieveData();		
	var cancelOrder = document.getElementById("cancelOrder");
	cancelOrder.onclick = clearOrder;
	
	var detailsAndPaymentForm = document.getElementById("detailsAndPaymentForm");
	detailsAndPaymentForm.onsubmit = validateCardDetails;
}

window.addEventListener("load",init);