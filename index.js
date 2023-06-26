// Moving the dodger left
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

//moving the dodger right
const dodgers = document.getElementById("dodger");
function moveDodgerRight() {
    var rightNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(rightNumbers, 10);
  
    if (left > 0 && left <=358 ) {
      dodger.style.left = `${left + 1}px`;
    }}
  
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });