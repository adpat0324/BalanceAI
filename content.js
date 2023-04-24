// Load jQuery
var script = document.createElement('script');
script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
script.type = "text/javascript";
document.getElementsByTagName('head')[0].appendChild(script);

// Wait for jQuery to be loaded
script.onload = function() {
    $(function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var currentUrl = tabs[0].url;
            console.log(currentUrl);
            
            $('#keywordsubmit').click(function(){
                if (currentUrl){
                    chrome.runtime.sendMessage(
                        {url: currentUrl},
                        function(response) {
                            sentiment = response.sentiment;
                            alert(sentiment);
                            
                            var notifOptions = {
                                type: "basic",
                                iconUrl: "icon48.png",
                                title: "Sentiment Analysis Result",
                                message: sentiment
                            };
                            
                            chrome.notifications.create('SentimentNotif', notifOptions);
                            
                        });
                }
                
                
                $('#keyword').val('');
                
            });
        });
    });
};
