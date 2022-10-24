chrome.tabs.onUpdated.addListener(function(tab) { 
 
chrome.tabs.executeScript(tab, {file: "js/jquery.min.js"});
chrome.tabs.executeScript(tab, {file: "js/bootstrap.min.js"});
chrome.tabs.executeScript(tab, {file: "js/popper.min.js"});
chrome.tabs.executeScript(tab, {file: "js/func.js"});

chrome.tabs.executeScript(tab, {file: "js/content.js"});   

    
chrome.tabs.insertCSS(tab, {file: "css/bootstrap.min.css"});
chrome.tabs.executeScript(tab, {file: "css/style.css"});   
console.log("bg runing....");  
//click icon

console.log("icon clicked..");
setTimeout(()=>{    
    chrome.tabs.executeScript(tab, {file: "js/popup.js"});
 chrome.tabs.sendMessage(tab, {name:"clicked"});
},1500);

    



    
   



/*chrome.webRequest.onCompleted.addListener(function(e){
    


                         
                    if(e.statusCode == 403){
                        var msg = {
name:"blocked",
url:e.url,
s:403                            
};
                        chrome.tabs.sendMessage(e.tabId, msg);
                  
                    
                    } else if(e.statusCode == 429){
                                                var msg = {
name:"blocked",
url:e.url,
s:429                           
};
                        chrome.tabs.sendMessage(e.tabId, msg);
               
        
                
                }  
                    
               

    

    
    

},{urls: ["<all_urls>"], types: ["xmlhttprequest"]}, ["responseHeaders"]);*/

    

      
    


    
    
    


});//onclick
