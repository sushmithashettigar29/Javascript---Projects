let btn = document.getElementById("con-btn");
let inputVal = document.getElementById("input-val");
let para1 = document.getElementById("para1");
let para2 = document.getElementById("para2");
let para3 = document.getElementById("para3");

btn.addEventListener("click", function () {
  let input = Number(inputVal.value);
  if (isNaN(input) || inputVal.value.trim() === "") {
    alert("Please enter a valid number");
    return;
  }
  convertLength(input);
  convertVolume(input);
  convertMass(input);
  inputVal.value = "";
});

function convertLength(input) {
  let meter = (input * 3.281).toFixed(3);
  let feet = (input * 0.3048).toFixed(3);
  para1.textContent = `${input} meters = ${meter} feets | ${input} feets = ${feet} meters`;
}

function convertVolume(input) {
  let liter = (input * 0.264).toFixed(3);
  let gallon = (input * 3.78541).toFixed(3);
  para2.textContent = `${input} liters = ${liter} gallons | ${input} gallons = ${gallon} liters`;
}

function convertMass(input) {
  let kilogram = (input * 2.204).toFixed(3);
  let pound = (input * 0.453592).toFixed(3);
  para3.textContent = `${input} kilos = ${kilogram} pounds | ${input} pounds = ${pound} kilos`;
}
