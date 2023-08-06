chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("youtube.com/watch")) {
    
    //Js split to select the section from url string
    const queryParameters = tab.url.split("?")[1];
    
    //UrlSearchParams-> interfase to work with url paramente
    const urlParameters = new URLSearchParams(queryParameters);
    
     
    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
      videoId: urlParameters.get("v"),
    });
  }
});
