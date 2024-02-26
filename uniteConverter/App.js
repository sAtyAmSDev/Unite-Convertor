var Feet = document.getElementById("Feet");
var Inch = document.getElementById("Inch");
Feet.addEventListener("input", function () {
  let F = this.value;
  let I = F * 12;
  Inch.value = I;
  //   console.log("hiii");
});
Inch.addEventListener("input", function () {
  let I = this.value;
  let F = I / 12;
  Feet.value = F;
  if (!Number.isInteger(F)) {
    F = F.toFixed(2);
  }
});
