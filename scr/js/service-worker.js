// 

// Listen for connections from the content script

chrome.runtime.onConnect.addListener(function(port) {
  if (port.name === 'xero') {
    port.onMessage.addListener(function(message) {
      console.log('Received message from Xero:', message);
      // Process the message and send a response if needed
    });
  }
});

Xero = (action, parameters = {}) => {
  let xeroParams
  /* Get Info From Xero in active window */
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      type: 'request',
      query: action
    }, function(response) {
      console.log('Received response from content script:', response);
      console.log(response);
      xeroParams = response.data.worker
    });
  });
  /* Execute Command in a single tab */
  chrome.tabs.query(xeroParams.tabQuery, function(tabs) {
    if (tabs.length > 0 & xeroParams.tabs != null) {
      var activeTab = tabs[xeroParams.tabs];
  
      chrome.tabs.sendMessage(activeTab.id, {
        type: 'action',
        action: action,
        parameters: parameters
      });
    /* If the module needs to execute in multiple tabs*/
    } else if (tabs.length > 0 & xeroParams.tabs == null) {
      tabs.forEach(function (tab) {
        chrome.tabs.sendMessage(tab.id, {
          type: 'action',
          action: action,
          parameters: parameters
        });
      });

    }
  });
}

chrome.commands.onCommand.addListener((command) => {
  Xero(command)
});   