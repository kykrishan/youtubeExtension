setInterval(skkip,1000);

// let skip=()=>{
//   if(document.querySelectorAll(".ytp-ad-module")[0].childNodes.length>0){
//     document.querySelectorAll("video")[0].currentTime=90;
//   }
// }
// setTimeout(skkip,1000);

function skkip(){
//   console.log("fnc called");
  if(document.querySelectorAll(".ytp-ad-text").length>0){
    // console.log("ifcalled")
    document.querySelectorAll("video")[0].currentTime=90;
    let element=document.querySelector(".ytp-ad-skip-button");
    element.click();
  }
}
console.log("autocalled");
window.addEventListener(onload,()=>console.log("onload"));
