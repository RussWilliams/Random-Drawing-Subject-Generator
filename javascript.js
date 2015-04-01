//global variables
	var output = ["Description: "]; //an  empty array, this will be the end result
	document.getElementById('output-area').innerHTML = output;
	

//add-subject function - onclick function to display "subject" in the output-area
	function addSubjectFunction() {
		output.push("SUBJECT");
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
	
	/*notes for selecting random subject in xml file.
		1.) Find total number of entries in subject xml file.
			1.a.) may need to exclude the wrapper.
		2.) Store total # as a variable (example: subjectDBTotalEntryCount).
		3.) feed variable to the following equation:
			Math.floor(Math.random() * subjectDBTotalEntryCount) + 1);
		4.) Store this in a variable (example: chosenSubjectPosition).
		5.) locate array position that matches chosenSubjectPosition.
		6.) pull unit from array and return to output array in the appropriate position.*/
	
	function createDescriptionFunction() {
		//create request object.
		var  ajaxSubject= new XMLHttpRequest(); //variable for subjects xml array
					
		//get the response.
		ajaxSubject.onreadystatechange=function() {
			if (ajaxSubject.readyState==4 && ajaxSubject.status==200) {
				var answer =  ajaxSubject.responseXML; //assign response to a variable.
				
				var subjects = answer.getElementsByTagName("name"); //get parts from document.
				var ajaxSubjectTotal= subjects.length - 1; //total # of entries in the subject xml array
				
				//choose a random number between 0 and total # of entries in subjects xml array
				var max = ajaxSubjectTotal; //high end of number range.
				var min = 0; //lowest possible number in range.
				var randomNumber = Math.floor((Math.random() * (max - min + 1)) + min);  

				//send to output area.
				var chosenSubjectPosition = subjects[randomNumber].innerHTML; //get value of randomly selected subject
				
				
				//write a check to see what the position in the array says and act according
				for (i = 0; i < output.length; i++) {
					
					if(output[i] == "SUBJECT") { //if the position says "SUBJECT"
						output[i] = chosenSubjectPosition;	//put subject into output array
						
						//find a way to change each output position independently at the same time.
					}
					
				} //end for loop, check for output position contents
					
				
				document.getElementById('output-area').innerHTML = output.join(" ");//re-display new complete output array.
				
			} //end if statement
		} //end state change function
			
			//send request.
			ajaxSubject.open("POST", "subjects.xml", true); //method, url of source, async?
			ajaxSubject.send();
		
	}//end createDescriptionFunction()
	
	
	
	
	