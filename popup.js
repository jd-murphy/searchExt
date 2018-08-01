let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
    let color = element.target.value;
    // let s = window.getSelection().getRangeAt(0);
    // alert("selection is " + s)

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript( {
            code: "window.getSelection().toString();"
        }, function(selection) {
            alert("selection is " + selection)
            q = encodeURIComponent(selection)
            chrome.tabs.create({ url: "http://www.google.com/search?q=" + q });
            


        });
        
    //   chrome.tabs.executeScript(
    //       tabs[0].id,
    //       {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };


  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      alert("Message received!")

        
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.executeScript( {
                code: "window.getSelection().toString();"
            }, function(selection) {
                alert("selection is " + selection)
                q = encodeURIComponent(selection)
                chrome.tabs.create({ url: "http://www.google.com/search?q=" + q });
                
    
    
            });
    });

});
//  function runSearch() {
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         chrome.tabs.executeScript( {
//             code: "window.getSelection().toString();"
//         }, function(selection) {
//             alert("selection is " + selection)
//             q = encodeURIComponent(selection)
//             chrome.tabs.create({ url: "http://www.google.com/search?q=" + q });
            


//         });
// });
// }