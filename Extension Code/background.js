chrome.action.onClicked.addListener(function() {
    chrome.windows.create({
      url: 'popup.html',
      type: 'popup',
      width: 300,
      height: 400
    });
  });
  