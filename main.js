const variables = document.getElementById("variables");

const downIcon = document.getElementById("down-icon");
const upIcon = document.getElementById("up-icon");

let isClick = 0;
variables.addEventListener("click", () => {
  isClick++;
  if (isClick == 1) {
    downIcon.style.display = "none";
    upIcon.style.display = "inline-block";
  } else if (isClick == 2) {
    downIcon.style.display = "inline-block";
    upIcon.style.display = "none";
    isClick = isClick - 2;
  } else {
  }
});

const scroll = new LocomotiveScroll({
  el: document.getElementById("head-to-foot"),
  smooth: true,
});
