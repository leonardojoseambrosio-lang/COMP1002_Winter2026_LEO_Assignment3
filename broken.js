// Assignment Three - Buggy Starter Code
// Fix the bugs so all four features work correctly.

let helloBtn = document.querySelector("#helloBtn");
let greetingOutput = document.querySelector("#greetingOutput");

let themeBtn = document.querySelector("#themeBtn");//Fixed selector because the original ID (#themeButton) did not match the HTML (#themeBtn)

let messageInput = document.querySelector("#messageInput");
let liveOutput = document.querySelector("#liveOutput");

let welcomeForm = document.querySelector("#welcomeForm");
let nameInput = document.querySelector("#nameInput");
let formOutput = document.querySelector("#formOutput");

// 1. Greeting Button
helloBtn.addEventListener("click", function() {
    //No errors - displays a greeting message when button is clicked
    greetingOutput.textContent = "Hello, student!";
});

// 2. Theme Toggle
themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");//Fixed class name to match CSS class "dark-mode"
    //check if the body has the class dark-mode and change the button text content
    if(document.body.classList.contains("dark-mode")){
        themeBtn.textContent = "Toggle Light Mode";
    }
    else {
        themeBtn.textContent = "Toggle Dark Mode";
    }
});

// 3. Live Input
messageInput.addEventListener("input", function() {// Replaced "change" with "input" so the text updates while typing instead of only after leaving the input field
    liveOutput.textContent = messageInput.value;//Fixed typo in messageinput, the correct is messageInput (note: JavaScript is case-sensitive)
});

// 4. Welcome Form
welcomeForm.addEventListener("submit", function(event) {//missing parameter (event) - Added 'event' parameter so preventDefault() works properly
    event.preventDefault();
        //check if the nameInput.value is blank
        if(nameInput.value.trim() == ""){
            alert("***Welcome Form: ***\nEnter your name!") //Show a pop-up alert to the user if the nameInput is blank
            nameInput.focus();//Focus on nameInput so the user knows where to type
        }
        else{
            formOutput.textContent = "Welcome, " + nameInput.value + "!";//Added an exclamation point
        }

});