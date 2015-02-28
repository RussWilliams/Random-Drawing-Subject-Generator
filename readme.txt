Random Drawing Subject Generator v1
Create by Russ Williams | Russ_Williams.info

License: 
	Free to use by anyone. No attribution needed. If using for a seperate project, edit my name and contact information out of files. 	If a new project is completed, I'd like to see it, so send me a link.

Objective:
	Create a simple program that can will tell you what to draw by compiling a description of the drawing based on user input. The user input will be to choose what part of the description to add (subject, condition, etc...) from available options, effectively letting the user detwermine how long the description will be. The output will be a description of at least one subject, a sentence, or several sentences describing the drawing. 

	Example 1 (shortest possible output): A dog.
	Example 2 (a sentence containing one of each option): A dog running in the woods.
	Example 3 (a long description): A dog running in the woods chasing a cat up a tree. A bear running after the dog as the dog's 				owner tries to stop the bear.

Purpose: 
	To help me and others learn to draw when we cannot think of what to work on.
	To provide a relatively simple, but expandable project to stretch my programming skills.

Resources:
	No frameworks to be used in this version. Will attempt to manage data collection and base with ajax and txt files. In later 		versions, frame works and larger back ends will be added to the project.

Measurable Outcomes:
	Finished product is ready for use and deployment online either at its own website or as a sub-foldr of my portfolio.

Program Description:
	The program will accept user input and generate a phrase/sentence describing the drawing. All content in this version will be 	PG-13ish. A seperate adult content version will be built in subsequent versions.

	Users will be presented with several buttons labeled "subject", "condition" (could be changed to action or verb), and "location".  	The user will use these buttons to compile a phrase or sentence by clicking them in the order that they want them to appear in the phrase. As the user clicks a button, the topic of that button (subject, etc...) will appear in the output field below the buttons. When the user has reached the length that he/she wants, he/she will use the "submit" button to compile and display the result. 

	The backend where we store the information for subjects, etc... will consit of txt files seperated by type. The information requested by the user will be sent using ajax to the appropriate file and returned to compile the sentence. The result will be displayed in the output field where the user was seeing the phrase template. 

	Once complete, the phrase can be copied to the user's computer, or the user can use the "reset" button to start over.

Features List:
	User input/control over building output.
	contact form to submit new content
		submissions from the contact form will be sent to a seperate storage page for review before going into the data base.



Next Version Upgrades
	1.) users will have more input options such as "relation to", "repeat subject", or "previous subject".
	2.) an adult content version will be created in a seperate project for use on any adult material submitted to the project.
	3.) package code for redistribution and rebranding to be given away to developers.
	4.) turn output into a downloadable form (pdf, etc...).
	5.) turn output into an email.
	6.) add advertising onto the site to generate revenue (just enough to support costs of deployment [domain name/hosting, etc...]).