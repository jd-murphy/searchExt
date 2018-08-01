chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({
        color: '#3aa757',
        lastClicked: 'not clicked yet!'
    }, function() {
        console.log("The color is green.");
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher({
            // pageUrl: {hostEquals: 'developer.chrome.com'},
            pageUrl: { schemes: ['https']},
          })
          ],
              actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
      });

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            // alert("received message! ->" + request.msg)
            
            // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            //     chrome.tabs.executeScript( {
            //         code: "window.getSelection().toString();"
            //     }, function(results) {
            //         alert("results are " + request.msg)
         
                        q = encodeURIComponent(request.msg)
                        chrome.tabs.create({ url: "http://www.google.com/search?q=" + q });
                    
                    
                    
        
   
    });
  
});


