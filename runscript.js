setInterval(videoAdd,1000);
setInterval(onVidBannerAd,1000);

function videoAdd(){
  if(document.querySelectorAll(".ytp-ad-text").length>0){
    var videoDivNew = document.querySelectorAll("video");
    videoDivNew.forEach(element => {
      if(element.currentTime >0){
        element.currentTime=100;
      }
    });
  }
}

function onVidBannerAd(){
  if(document.querySelectorAll(".ytp-ad-overlay-close-button").length>0){
    let element=document.querySelector(".ytp-ad-overlay-close-button");
    element.click();
  }
}


