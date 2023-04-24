var serverhost = 'http://127.0.0.1:5000';

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        
          
        var url = serverhost + '/sentiment?url='+ encodeURIComponent(request.url) ;
        
        console.log(url);
        
        fetch(url)
        .then(response => response.json())
        .then(response => sendResponse({sentiment: response.sentiment}))
        .catch(error => console.log(error))
            
        return true;  // Will respond asynchronously.
          
});