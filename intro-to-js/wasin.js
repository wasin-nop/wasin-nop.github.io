function askMyName() {
  const name = prompt("Please enter your name", "Bond, James Bond");
  if (name != null) {
    document.getElementById("h1-message").innerHTML = "My username is " + name;
  }
}

function helloWorld() {
  const h1message = document.getElementById("h1-message").innerHTML;
  alert(h1message + " 'มันไม่ใช่บัค มันคือฟีเจอร์'");
}

function calAge() {
  const age = prompt("What Year You were Born", "1990");
  const d = new Date();
  let year = d.getFullYear();
  alert(`Congratulation you live in this country ${year - age} years.`);
}

//
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function loadProfile() {
  // const profileName = prompt("Please enter your name", "Bond, James Bond");
  // if (profileName != null) {
  document.getElementById("my-name").innerHTML = capitalizeFirstLetter(`Wasin`);
  // }
  // const province = prompt("What is your state/province", "Bangkok");
  // if (province != null) {
  document.getElementById("my-province").innerHTML =
    capitalizeFirstLetter(`Bangkok`);
  // }
}

// const laughTale {
//   member: 5,
//   memberName: ['Bright','Fen','Opaul','Now','Champ']

//
function calRectangleArea(length, width) {
  return length * width;
}
console.log(calRectangleArea(8, 2));

function calTriangleArea(base, height) {
  return 0.5 * base * height;
}
console.log(calTriangleArea(8, 2));

function payWithPaotang(priceOfProduct, dailyLimit) {
  let remaining = 1200;
  const toCashPay = priceOfProduct / 2;
  if (toCashPay > dailyLimit) {
    return priceOfProduct - dailyLimit;
  } else {
    return toCashPay;
  }
}

function calPayment(payment) {
  const transactionFee = 3;
  const interestFee = payment * 0.01;
  return payment + transactionFee + interestFee;
}
