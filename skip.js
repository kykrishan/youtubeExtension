let btn=document.getElementById("skip");
btn.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: skp,
    });
  });
  function skp(){
    document.querySelectorAll("video")[0].currentTime=90;
    let element=document.querySelector(".ytp-ad-skip-button");
    console.log(element);
    element.click();
    
  }