function askMyName() {
  const name = prompt("Please enter your name", "Bond, James Bond");
  if (name != null) {
    document.getElementById("h1-message").innerHTML = "My name is " + name;
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
  const profileName = prompt("Please enter your name", "Bond, James Bond");
  if (profileName != null) {
    document.getElementById("my-name").innerHTML =
      capitalizeFirstLetter(profileName);
  }
  const province = prompt("What is your state/province", "Bangkok");
  if (province != null) {
    document.getElementById("my-province").innerHTML =
      capitalizeFirstLetter(province);
  }
}
