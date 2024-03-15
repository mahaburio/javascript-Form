const variableBtn = document.getElementById("variableBtn");
const downIcon = document.getElementById("down-icon");
const upIcon = document.getElementById("up-icon");

let isClick = 0;
variableBtn.addEventListener("click", () => {
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

const exContextBtn = document.getElementById("exContextBtn");
const exContextContent = document.getElementById("exContextContent");
const jsIntroBtn = document.getElementById("jsIntroBtn");
const jsIntro = document.getElementById("jsIntro");
const operatorBtn = document.getElementById("operatorBtn");
const conditionBtn = document.getElementById("conditionBtn");
const loopBtn = document.getElementById("loopBtn");
const arrayBtn = document.getElementById("arrayBtn");
const objectBtn = document.getElementById("objectBtn");
const functionBtn = document.getElementById("functionBtn");
const stringBtn = document.getElementById("stringBtn");
const numberBtn = document.getElementById("numberBtn");
const hoistingBtn = document.getElementById("hoistingBtn");
const scopeBtn = document.getElementById("scopeBtn");
const mathBtn = document.getElementById("mathBtn");
const dateBtn = document.getElementById("dateBtn");
const setBtn = document.getElementById("setBtn");
const asynBtn = document.getElementById("asynBtn");
const prototypeBtn = document.getElementById("prototypeBtn");
const thisBtn = document.getElementById("thisBtn");
const inheriBtn = document.getElementById("inheriBtn");
const advanceBtn = document.getElementById("advanceBtn");


// exContextBtn.addEventListener("click", () => {
//   exContextContent.style.display = "block";
//   document.getElementById("jsIntroBtn").classList.remove("myStyle");
//   document.getElementById("exContextBtn").classList.add("myStyle");
// });

// jsIntroBtn.addEventListener("click", () => {
//   jsIntro.style.display = "block";
//   document.getElementById("exContextBtn").classList.remove("myStyle");
//   document.getElementById("jsIntroBtn").classList.add("myStyle");
// });


// let btnArr = [
//   exContextBtn,
//   jsIntroBtn,
//   variableBtn,
//   operatorBtn,
//   conditionBtn,
//   loopBtn,
//   arrayBtn,
//   objectBtn,
//   functionBtn,
//   stringBtn,
//   numberBtn,
//   hoistingBtn,
//   scopeBtn,
//   mathBtn,
//   dateBtn,
//   setBtn,
//   asynBtn,
//   prototypeBtn,
//   thisBtn,
//   inheriBtn,
//   advanceBtn
// ];

// btnArr.forEach((element) => {
//   if (element) {
//     element.addEventListener("click", () => {
//       // Remove the class from all buttons
//       btnArr.forEach(btn => {
//         btn.classList.remove("myStyle");
//       });
      
//       // Add the class to the clicked button
//       element.classList.add("myStyle");
//     });
//   }
// });


let listItem = document.querySelectorAll('li');

listItem.forEach((element)=>{
  if (element) {
    element.addEventListener("click", () => {
      // Remove the class from all buttons
      listItem.forEach(btn => {
        btn.classList.remove("myStyle");
      });
      
      // Add the class to the clicked button
      element.classList.add("myStyle");
    });
  }
});


