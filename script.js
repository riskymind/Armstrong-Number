//method for disabling the submit button
const disable =()=> {
	let inputNumber = document.getElementById('digits').value;
	let submitButton = document.getElementById("btn");

	let splitInputNumber = inputNumber.split("");
	let numberLength = splitInputNumber.length;

	//checking for length if is equal to 3 digits
	if(numberLength === 3) {
		submitButton.setAttribute('disable', 'false');
		submitButton.style.background = "#0959c9";
		//armstrong();
	} else {
		submitButton.setAttribute('disable', 'true');
		submitButton.style.background = "#f2f2f2";
    //document.getElementById("sample").innerHTML = "";
	}
}

/*const errorAlert = ()=> {
	alert("Please enter a 3 digit number");
}*/


const armstrong = ()=> {
	let inputNumber = document.getElementById("digits").value;
	let splitInputNumber = inputNumber.split("");
	let numberLength = splitInputNumber.length;
	let submitButton = document.getElementById("btn");
	let sum;
  //checking if the submit button is enable
	if(submitButton.enabled = true) {
    //checking if input field is empty.
		if(inputNumber === "" || inputNumber === " ") {
		  document.getElementById("error").innerHTML = "Please enter your values";
		  document.getElementById("error").style.color = "red";
	      document.getElementById("sample").innerHTML = "";
	      document.getElementById("result").innerHTML = "";
		} // checking input number is not a number
    else if(isNaN(inputNumber)) {
			document.getElementById("error").innerHTML = "Numbers Only Please";
			document.getElementById("error").style.color = "red";
      		document.getElementById("sample").innerHTML = "";
      		document.getElementById("result").innerHTML = "";
		}//checking if the inputed number is less or greater than 3. 
    else if(numberLength > 3 || numberLength < 3) {
      		document.getElementById("sample").innerHTML = "";
			document.getElementById("error").innerHTML = "Please number should be 3 digits only";
			document.getElementById("error").style.color = "red";
      		document.getElementById("result").innerHTML = "";
			submitButton.enabled = false;
		} else {
			/*for(i=0; i == numberLength; i++){
                sum = splitInputNumber[i]**3 + sum;
             }*/
  //initializing the new array to the power of 3.
      let num1 = splitInputNumber[0]**3;
      let num2 = splitInputNumber[1]**3;
      let num3 = splitInputNumber[2]**3;

			 sum = num1 + num2 + num3; 
            
  //checking if the input number is an Armstrong number
      if(sum == inputNumber) {
        document.getElementById("error").innerHTML = "";
        document.getElementById("result").innerHTML = `${inputNumber} is an Armstrong number`;
        document.getElementById("sample").innerHTML = `${splitInputNumber[0]}**3 + ${splitInputNumber[1]}**3 + ${splitInputNumber[2]}**3 = ${inputNumber}`;
        document.getElementById("digits").value = "";
      } else {
        document.getElementById("sample").innerHTML = "";
        document.getElementById("error").innerHTML = "Wrong Number!!";
        document.getElementById("error").style.color = "red";
        document.getElementById("result").innerHTML = `${inputNumber} is not an Armstrong number`;
        document.getElementById("digits").value = "";
      }
		}
	} else {
		alert("Please enter a 3 digit number");
	}
}