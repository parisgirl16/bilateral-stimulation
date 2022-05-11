var start = document.getElementById("start");
var stop = document.getElementById("stop");

start.onclick = function animate() {
  // var targetElement = document.getElementById("circle");
  // targetElement.className = "anim";
  document.getElementById("circle").style.animation = "slide 1.25s linear infinite";
}

stop.onclick = function pause() {
  // var targetElement = document.getElementById("circle");
  // targetElement.className = "stop";
  document.getElementById("circle").style.animation = "still infinite";
}
