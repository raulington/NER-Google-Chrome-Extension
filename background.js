
chrome.action.onClicked.addListener(buttonClicked)


function buttonClicked(tab) {
    chrome.runtime.lastError ;
    chrome.tabs.sendMessage(tab.id, "hello")
}

