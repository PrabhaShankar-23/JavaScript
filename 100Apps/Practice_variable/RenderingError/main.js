document.getElementById("btn").addEventListener("click", errorMsg);

function errorMsg() {
  document.getElementById("msg").innerHTML =
    "Something went wrong! Please try again ";
}
