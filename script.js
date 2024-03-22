var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	/*The above function is printing the hex values from the colour selector, */
	/*for example linear-gradient(to right, rgb(71, 169, 71), rgb(112, 52, 173));*/


	css.textContent = body.style.background + ";";
	/*The textContent is the DOM property that is used to set text content for the HTML element or get the text content written inside
	that element*/
}

/*color1.value  = value here is selecting the hex colour*/

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
/*The above is a callback function, we only want to set the gradient colour after the event "input" has occured by the user*/
/*The InputEvent Object handles events that occur when an input element is changed.*/

