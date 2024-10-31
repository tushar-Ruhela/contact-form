let fName = document.getElementById("fname");
let lName = document.getElementById("lname");
let emailId = document.getElementById("email");
let messageBox = document.getElementById("message");
let checkBox = document.getElementById("checkbox");
const submitBtn = document.getElementById("btn");
let radioBtn1 = document.getElementById("General Enquiry");
let radioBtn2 = document.getElementById("Support Request");

let reqAreas = document.querySelectorAll(".required-field");
let validEmail=document.getElementsByClassName("valid-prompt");

var array=[];
var formdata={};

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    reqAreas.forEach(reqArea => reqArea.innerText = "");

    let hasError = false;

    
    if (fName.value.trim() === "") {
        reqAreas[0].innerText = "First name is required";
        hasError = true;
    }

    
    if (lName.value.trim() === "") {
        reqAreas[1].innerText = "Last name is required";
        hasError = true;
    }


    if (emailId.value.trim() === "") {
        reqAreas[2].innerText = "Email is required";
        hasError = true;
    } else {
        if (!ValidateEmail(emailId)) {
            hasError = true;
        }
    }


    if (messageBox.value.trim() === "") {
        reqAreas[3].innerText = "Please select a query type.";
        hasError = true;
    }

    
    if (!radioBtn1.checked && !radioBtn2.checked) {
        reqAreas[4].innerText = "Please select a query type";
        hasError = true;
    }

  
    if (!checkBox.checked) {
        reqAreas[5].innerText = "To submit this form, please consent to being contacted";
        hasError = true;
    }

    
    if (!hasError) {
        alert("Form submitted successfully!");
        document.getElementById("form").reset();
        
        reqAreas.forEach(reqArea => reqArea.innerText = "");
        
    }

// formdata={'Frst-name':fName.innerText,'last-name':lName.innerText,'Email-address':emailId.innerText,'Query-message':messageBox.innerText}
// array.push(formdata);
// console.log(array);
});
function ValidateEmail(email) {
    // Define the valid regex pattern
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // Check if the email matches the valid regex pattern
    if (email.value.match(validRegex)) {
        // Assuming validEmail is a collection, target the first instance with [0]
        validEmail[0].innerText = "Valid email address";
        validEmail[0].style.color = "green";

        // Assuming this hides and shows specific areas after validation
        email.style.backgroundColor = "";
        email.style.border = "";
        email.style.color = "";
        email.style.boxShadow = "";

        return true;

    } else {
        // Display invalid message if the email does not match the pattern
        validEmail[0].innerText = "Invalid email address";
        validEmail[0].style.color = "red";

        // Add styling for invalid email
        email.style.backgroundColor = "hsl(0, 89%, 90%)";
        email.style.border = "2px solid rgb(235, 86, 86)";
        email.style.color = "rgb(235, 86, 86)";
        email.style.boxShadow = "0 0 10px 5px hsl(0, 89%, 90%)";

        return false;
    }
}
