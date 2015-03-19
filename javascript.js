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
	
//Submit function for ajaxing the content from the xml files.
	function createDescriptionFunction() {
		//create request object.
		var  ajaxSubject= new XMLHttpRequest();
		
		//get the response.
		ajaxSubject.onreadystatechange=function() {
			if (ajaxSubject.readyState==4 && ajaxSubject.status==200) {
				//assign response to a variable.
				var answer =  ajaxSubject.responseXML;
				//get parts from document.
				var x = answer.getElementsByTagName("drawingMaterial");
				//sent to output area.
				for (i = 0; i < x.length; i++) {
					var text = text + x[i].innerHTML;
				}//end for statement
				document.getElementById('output-area').innerHTML = text;
			}//end if statement
		}//end state change function
		
		//send request.
		ajaxSubject.open("POST", "subjects.xml", true); //method, url of source, async?
		ajaxSubject.send();
	}//end createDescriptionFunction.
	