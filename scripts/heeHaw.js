function clearErrors(){
    let error = document.getElementsByClassName("text-danger");
    for(let i = 0; i < error.length; i++){
        error[i].classList.add("d-none");
    }
}

function validate(){
    clearErrors();

    let isValid = true;
    let num = document.getElementById("inputNum").value;
    if(num < 0){
        let errNeg = document.getElementById("err-negative");
        errNeg.classList.remove("d-none");
        isValid = false;
    } else if(isNaN(num)){
        let errNaN = document.getElementById("err-NaN");
        errNaN.classList.remove("d-none");
        isValid = false;
    }

    if(isValid){
        heeHaw(num);
    }
}

function heeHaw(num) {
    let output = document.getElementById("heehawList");
    for (let i = 1; i <= num; i++) {
        //check if number is divisible by both 3 and 5
        if ((i % 3 == 0) && (i % 5 == 0)) {
            output.innerHTML +="Hee Haw! <br>";
            //check if number is divisible by 5
        } else if (i % 5 == 0) {
            output.innerHTML += "Haw!<br>";
            //check if number is divisible by 3
        } else if ((i % 3 == 0)) {
            output.innerHTML += "Hee! <br>";
        } else {
            output.innerHTML += i + "<br>";
        }
    }
}

// for (let number = 1; number <= num; number++) {
//     //check if number is divisible by both 3 and 5
//     if ((num % 3 == 0) && (num % 5 == 0)) {
//         document.write("Hee Haw! <br>");
//         //check if number is divisible by 5
//     } else if (num % 5 == 0) {
//         document.write("Haw!<br>");
//         //check if number is divisible by 3
//     } else if ((num % 3 == 0)) {
//         document.write("Hee! <br>");
//     } else {
//         document.write(num.toString() + "<br>");
//     }
// }





