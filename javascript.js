//global variables
	var output = ["Description: "]; //an  empty array, this will be the end result
	document.getElementById('output-area').innerHTML = output;
	

//add-subject function - onclick function to display "subject" in the output-area
	function addSubjectFunction() {
		output.push("SUBJECT ");
		document.getElementById('output-area').innerHTML = output.join(" ");
	} //end addSubjectFunction
	
//add-condition-function - onclick function to display "subject" in the output-area
	function addConditionFunction() {
		output.push("CONDITION");
		document.getElementById('output-area').innerHTML = output.join(" ");
	} //end addConditionFunction
	
//reset function for output area
	function resetOutputFunction() {
		output.splice(1, output.length); //use splice to remove all units after the first ("Description: ").
		document.getElementById('output-area').innerHTML = output;
	}//end resetOutputFunction
	
//Submit function for ajaxing the content from the txt files.
	function createDescriptionFunction() {
		//create request object.
		var  ajaxSubject= new XMLHttpRequest();
		
		//send request.
		ajaxSubject.open("GET", "subjects.js", true); //method, url of source, async?
		ajaxSubject.send();
		
		//get the response.
		var answer = ajaxSubject.responseText;
		document.getElementById('output-area').innerHTML = answer;
	}//end createDescriptionFunction.
	