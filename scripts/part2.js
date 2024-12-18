
"use strict";

function storeDataIntoStorage(firstName, lastName, email, streetAddress, suburb, phoneNumber, 
	stateSelected, postCode, comment, chosenProduct, quantity)
{
	if(typeof(Storage)!=="undefined"){
		localStorage.setItem("firstName", firstName);
		localStorage.setItem("lastName", lastName);
		localStorage.setItem("email", email);
		localStorage.setItem("streetAddress", streetAddress);
		localStorage.setItem("suburb", suburb);
		localStorage.setItem("phoneNumber", phoneNumber);
		localStorage.setItem("stateSelected", stateSelected);
		localStorage.setItem("postCode", postCode);
		localStorage.setItem("comment", comment);
		localStorage.setItem("chosenProduct", chosenProduct);
		localStorage.setItem("quantity", quantity);
	}
}

function validate(){
	var errorMsg = "";
	var result = true;
	var chosenProduct = document.getElementById("dealsNDuration").value;
	var quantity = document.getElementById("quantity").value;
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var email = document.getElementById("email").value;
	var streetAddress = document.getElementById("streetAddress").value;
	var suburb = document.getElementById("suburb").value;
	var phoneNumber = document.getElementById("phoneNumber").value;
	var stateSelected = document.getElementById("state").value;
	var postCode = document.getElementById("postcode").value;
	var comment = document.getElementById("comment").value;
	
	if(chosenProduct == "none") {
		errorMsg += "Please choose a product.\n";
		result = false;
	}
	
	if(isNaN(quantity) || (quantity <= 0)){
		errorMsg += "Please enter a positive number.\n";
		result = false;
	}
	
	if(stateSelected == "none") {
		errorMsg += "Please select a state.\n";
		result = false;
	}
	
	if (!postCode.match(/^\d{4}$/)){	 
		errorMsg += "Postcode should be 4-digit number.\n";
		result = false;
	}
	else{					
		switch (stateSelected){
			case "TAS":
				if (postCode[0] != "7"){										
					errorMsg += "TAS post code should start with 7.\n";
					result = false;
				}
				break;
				
			case "NSW":
				if (postCode[0] != "1" && postCode[0] != "2"){					
					errorMsg += "NSW post code should start with 1 or 2.\n";
					result = false;
				}
				break;
				
			case "SA":
				if (postCode[0] != "5"){										
					errorMsg += "SA post code should start with 5.\n";
					result = false;
				}
				break;
				
			case "QLD":
				if (postCode[0] != "4" && postCode[0] != "9"){					
					errorMsg += "QLD post code should start with 4 or 9.\n";
					result = false;
				}
				break;
				
			case "WA":
				if (postCode[0] != "6"){										
					errorMsg += "WA post code should start with 6.\n";
					result = false;
				}
				break;
				
			case "VIC":
				if (postCode[0] != "3" && postCode[0] != "8"){					
					errorMsg += "VIC post code should start with 3 or 8.\n";
					result = false;
				}
				break;
			
			case "NT":
			case "ACT":
				if (postCode[0] != "0"){								
					errorMsg += `${stateSelected} post code must start with 0.\n`;
					result = false;
				}
				break;
		}
	}
	
	if(result){
		storeDataIntoStorage(firstName, lastName, email, streetAddress, suburb, phoneNumber, 
			stateSelected, postCode, comment, chosenProduct, quantity);
	}
	
	if(errorMsg != "") {
		alert(errorMsg);
		result = false;
	}
	
	return result;
}


function init(){
	var enquiryForm = document.getElementById("enquiryFormID");
	enquiryForm.onsubmit = validate;
}

window.onload = init;