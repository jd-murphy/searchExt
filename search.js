
document.addEventListener("pointerup", function(event) { 

    // alert("THis is the new pointer up event!")
    

    // window.postMessage({ type: "FROM_PAGE", text: "Hello from the webpage!" }, "*");
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //     chrome.tabs.executeScript( {
    //         code: "window.getSelection().toString();"
    //     }, function(selection) {
        
               
            if (window.getSelection().toString() != "" && window.getSelection().toString() != undefined) {
                chrome.runtime.sendMessage({msg: window.getSelection().toString()}, function(response) {
                    // alert("sent message!")
                    
                });
            }

               
            
            });
            
//         });


// });

