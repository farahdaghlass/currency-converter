var input = document.querySelector(".amount");
var currency = document.querySelector("select");
var registerForm = document.querySelector(".registerForm");
var para = document.querySelector(".result");

registerForm.onsubmit = function (e) {
    e.preventDefault();


    if (currency.value == 'Dollar') {
        para.innerHTML = input.value / 3.75;
    }
    if (currency.value == 'JOD') {
        para.innerHTML = input.value / 5;
    }


    if (currency.value == 'NIS') {
        para.innerHTML = input.value / 1;
    }



}
