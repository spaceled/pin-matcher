// Hide Notification Section
notification();

//Generate random number 10000 to 9999
document.getElementsByClassName("generate-btn")[0]
.addEventListener("click", function() {
    notification();
    document.getElementsByClassName("form-control")[1].value = "";
    let randomnumber = randomNumber(9999, 1000);
    document.getElementsByClassName("form-control")[0].value = randomnumber;
});

function notification() {
    document.getElementById("not-matched").style.display = "none";
    document.getElementById("matched").style.display = "none";    
}

function pinMatch() {
    document.getElementById("not-matched").style.display = "none";
    document.getElementById("matched").style.display = "block"; 
}

function pinNotMatch() {
    document.getElementById("not-matched").style.display = "block";
    document.getElementById("matched").style.display = "none"; 
}

function randomNumber(maxNum, minNum) {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}
//  End of Function

//Button controlling
document.getElementsByClassName("calc-body")[0]
    .addEventListener("click", function(event) {
        const element = event.target;
        let input = document.getElementsByClassName("form-control")[1].value;

        if(element.classList.contains("backspace")) { 
                              
            input = input.substr(0, input.length-1);
            document.getElementsByClassName("form-control")[1].value = input;

        } else if(element.classList.contains("clear")) {    

            document.getElementsByClassName("form-control")[1].value = "";

        } else if(element.classList.contains("submit-btn")) {

        // control output section
        const generatedNumber = document.getElementsByClassName("form-control")[0].value;

        if(input === generatedNumber) {
            pinMatch();
        } else {
            pinNotMatch();
            let tryRemamin = document.getElementById("try-remain").innerText;
            tryRemamin = Number(tryRemamin)-1;
            document.getElementById("try-remain").innerText = tryRemamin;
            if(tryRemamin === 0) element.disabled = true;
        }

        } else if(element.classList.contains("button")) {

            const digit = element.innerText;
            input =  input + digit;
            document.getElementsByClassName("form-control")[1].value = input;

        }
    });
//  End of JavaScript