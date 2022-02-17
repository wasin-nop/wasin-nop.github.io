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
