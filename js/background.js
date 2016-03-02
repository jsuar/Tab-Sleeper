// Action when browser icon is clicked
chrome.browserAction.onClicked.addListener(function() {
});

// References:
// https://developer.chrome.com/extensions/messaging
// http://blog.papersapp.com/chrome-development-parent-and-child-windows/

function SleepTab(sleepTime, tabId){
  setTimeout(function() {
    console.log("Time is up.");
    chrome.tabs.remove(tabId);
  }, sleepTime*60000);
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    console.log("Tab: " + request.sourceTabId)
    console.log("Time: " + request.sleepTime)
    
    SleepTab(request.sleepTime,request.sourceTabId);
});