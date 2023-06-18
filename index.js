// import "./styles.css";

var dateOfBirth = document.querySelector("#dob");
var luckyNum = document.querySelector("#lucky-num");
var checkBtn = document.querySelector("#check-btn");
var resultDiv = document.querySelector("#result");
var errorDiv = document.querySelector("#error");

function calculateSum(dob, num) {
  var dateVal = dob.split("-");
  var newVal = Number(dateVal[0]) + Number(dateVal[1]) + Number(dateVal[2]);
  console.log("date Integer", newVal);
  if (newVal % num === 0) {
    console.log("Your Birthday is lucky");
    resultDiv.innerHTML = "Your Birthday is lucky";
  } else {
    console.log(
      "Sorry bud! your birthday isn't lucky according to our application "
    );
    resultDiv.innerHTML =
      "Sorry bud! your birthday isn't lucky according to our application";
  }
}
function checkDob() {
  const dobVal = dateOfBirth.value;
  const numVal = luckyNum.value;
  console.log("date of birth:", dobVal);
  console.log("lucky number value: ", numVal);
  if (numVal <= 0) {
    errorDiv.style.display = "block";
    errorDiv.innerHTML = "Please enter valid number!";
    resultDiv.style.display = "none";
  } else {
    errorDiv.style.display = "none";
    resultDiv.style.display = "block";
    calculateSum(dobVal, numVal);
  }
}
function clearFields() {
  document.getElementById("dob").value="";
  document.getElementById("lucky-num").value="";
  errorDiv.style.display = "none";
    resultDiv.style.display = "none";
}

checkBtn.addEventListener("click", checkDob);
