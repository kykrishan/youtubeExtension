setInterval(skipSonyLivAd,1000);

function skipSonyLivAd(){
    if(document.querySelectorAll(".video")[1]!=null){
        console.log("Ads displayed...");
        document.querySelectorAll(".video")[1].currentTime=100;
    }
  }