let btn=document.getElementById("changeColor");
btn.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: skp,
    });
  });


function skp(){
    console.log("fnc called");
    if(document.querySelectorAll(".ytp-ad-module")[0].childNodes.length>0){
      console.log("ifcalled")
      document.querySelectorAll("video")[0].currentTime=90;
    }
  }