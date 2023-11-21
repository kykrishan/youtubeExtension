setInterval(skip,1000);

function skip(){
  if(document.querySelectorAll(".ytp-ad-text").length>0){
    console.log("Ads displayed...");
    var videoDivNew = document.querySelectorAll("video");
    videoDivNew.forEach(element => {
      if(element.currentTime >0 && element.currentTime>99){
        element.currentTime=100;
      }
    });

    document.querySelectorAll("video")[0].currentTime=90;
    let element;
    if(document.querySelector(".ytp-ad-skip-button-modern")!=null){
      element=document.querySelector(".ytp-ad-skip-button-modern")
      }else{
      element=document.querySelector(".ytp-ad-skip-button")
    }
    console.log(element);
    if(element!=null){
          element.click();
        }
  }
}