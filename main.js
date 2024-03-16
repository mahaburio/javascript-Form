const scroll = new LocomotiveScroll({
  el: document.getElementById("head-to-foot"),
  smooth: true,
});

const exContextContent = document.getElementById("exContextContent");
const jsIntroContent = document.getElementById("jsIntroContent");
const varContent = document.getElementById("varContent");

const variableIcon = document.getElementById("variableIcon");
const operatorIcon = document.getElementById("operatorIcon");
const conditionIcon = document.getElementById("conditionIcon");
const loopIcon = document.getElementById("loopIcon");
const arrayIcon = document.getElementById("arrayIcon");
const objIcon = document.getElementById("objIcon");

const variableBtn = document.getElementById("variableBtn");
const exContextBtn = document.getElementById("exContextBtn");
const jsIntroBtn = document.getElementById("jsIntroBtn");
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
const varBtn = document.getElementById("varBtn");


let btnArr = [
  variableBtn,
  jsIntroBtn,
  exContextBtn,
  varBtn,
  operatorBtn,
  conditionBtn,
  loopBtn,
  arrayBtn,
  objectBtn,
  functionBtn,
  stringBtn,
  numberBtn,
  hoistingBtn,
  scopeBtn,
  mathBtn,
  dateBtn,
  setBtn,
  asynBtn,
  prototypeBtn,
  thisBtn,
  inheriBtn,
  advanceBtn
];

// let isClick = 0;

// btnArr.forEach((iconAn)=>{
//   if(iconAn==variableBtn){
//     iconAn.addEventListener("click", () => {
//       isClick++;
//       if(true){
//         if (isClick == 1) {
//           variableIcon.style.transform = "rotate(180deg)";
//         } else if (isClick == 2) {
//           variableIcon.style.transform = "rotate(0deg)";
//           isClick = isClick - 2;
//         }
//       }
//     });
//   }
// });

let contentArr = [exContextContent,jsIntroContent,varContent]

btnArr.forEach((element) => {
  if (element==jsIntroBtn) {
    element.addEventListener('click',()=>{
      contentArr.forEach((content)=>{
        if(content==jsIntroContent){
          jsIntroContent.style.display='block'
        }else{
          content.style.display="none"
        }
      })
    })
  }else if (element==exContextBtn) {
    element.addEventListener('click',()=>{
      contentArr.forEach((content)=>{
        if(content==exContextContent){
          exContextContent.style.display='block'
        }else{
          content.style.display="none"
        }
      })
    })
  }else if(element==varBtn){
    element.addEventListener('click',()=>{
      contentArr.forEach((content)=>{
        if(content==varContent){
          varContent.style.display='block'
        }else{
          content.style.display="none"
        }
      })
    })
  }
});

// ? ========== PROTI CLICK A J BACKGROUND CHANGE HOI SETA myStyle add and Remove ===========

let asideItem = document.getElementById('asideItem')

let listItem = asideItem.querySelectorAll('li');

listItem.forEach((item)=>{
  if (item) {
    item.addEventListener("click", () => {
      // Remove the class from all buttons
      listItem.forEach(removeClass => {
        removeClass.classList.remove("myStyle");
      });
      
      // Add the class to the clicked button
      item.classList.add("myStyle");
    });
  }
});



 

