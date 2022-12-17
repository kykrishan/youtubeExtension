setInterval(skkip,1000);

function skkip(){
  console.log("fnc called");

  if(document.querySelectorAll(".ytp-ad-text").length>0){
    console.log("Ads displayed...");
    var videoDivNew = document.querySelectorAll("video");
    videoDivNew.forEach(element => {
      if(element.currentTime >0){
        element.currentTime=100;
      }
    });


    document.querySelectorAll("video")[0].currentTime=90;
    let element=document.querySelector(".ytp-ad-skip-button");
    element.click();
  }
}
console.log("autocalled");
// window.addEventListener(onload,()=>console.log("onload"));
