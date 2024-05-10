// 
Xero = (action, parameters = {}) => {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    if (tabs.length > 0) {
      var activeTab = tabs[0];
  
      chrome.tabs.sendMessage(activeTab.id, {
        action: action,
        parameters: parameters
      });
    }
  });
}

chrome.commands.onCommand.addListener((command) => {
  Xero(command)
});   