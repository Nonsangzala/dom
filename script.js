var btn = document.querySelector("#card");
var btn = document.querySelector("button");
var h5 = document.querySelector("h5");


var flag = 0;
btn.addEventListener("click", function () {
  if (flag == 0) {
    h5.innerHTML = "friends";
    h5.style.color = "red"
    btn.innerHTML = "Remove friends";
    flag = 1;

  }
  else {
    h5.innerHTML = "strangers";
    h5.style.color = "green";
    btn.innerHTML = "Add friends";
    flag = 0;
  }
})
