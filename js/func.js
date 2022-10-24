function tbody(b,type){
    b = b.replace('undefined',window.location.origin);
if(type == "link"){
   return `<th scope="row"><a href=${b} target=_blank >${b}</a></th>`;
   }else{
   return `<th scope="row">${b}</th>`;
   }



}


    $('.customization_popup').on('click', function(event) {
        if ($(event.target).is('.customization_popup_close') || $(event.target).is('.customization_popup')) {
            event.preventDefault();
            $(this).removeClass('is-visible');
        }
    });
    $(document).keyup(function(event) {
        if (event.which == '27') {
            $('.customization_popup').removeClass('is-visible');
        }
    });



function isBase64(str)
{
    return str.length % 4 == 0 && /^[A-Za-z0-9+/]+[=]{0,3}$/.test(str);
}

function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

     function result(t,head){
  
         //for headers
         if(head == 1){
             
             
             $.each(eval(t),function(i,v){
             
                 $(".result").append(i+"- URL: <b>"+v.url+"</b> - <b> "+v.msg+"</b><br>");
             
             });
          
       
                 
            }else if(head == 2){
    $(".rhead").append(`<td>#</td>
<td>URL</td>
<td>Paramter</td>
<td>Value</td>`);
        $.each((eval(t)), (i,v)=>{
$(".rbody").append(`
 <tr>
  ${tbody(i)}
${tbody(v.url,"link")}
      ${tbody(v.key)}
      ${tbody(v.value.replace('</>',"&lt;&gt;"))}
      </tr>
`);
                
                 });
                
                 
             }else if(head == 3){
                 
                 
    $(".rhead").append(`
<<td>#</td>
<td>URL</td>`);
                 $.each((eval(t)), (i,v)=>{
                                         $(".rbody").append(`
 <tr>
  ${tbody(i)}
      ${tbody(v.url,"link")}
      </tr>
      
`);
                
   
                 });
                
                 
             }else if(head == 5){
                 
                                  $(".rhead").append(`
<td>#</td>
<td>URL</td>
<td>Parameter</td>
<td>Encoded</td>
<td>decoded</td>`);
                 $.each((eval(t)), (i,v)=>{
                         if(v.v.indexOf("%3d") != -1 || v.v.indexOf("%3D") != -1){
        var vx = v.v.replace(/\%3D/gi,"=");
       }else{
            var vx = v.v;
       }
                          $(".rbody").append(`
 <tr>
      ${tbody(i)}
      ${tbody(v.url,"link")}
      ${tbody(v.p)}
      ${tbody(v.v)}
      ${tbody(atob(vx))}
      </tr>
`);
                     

                 
                 });
                
                 
             }else{
                 
                 $(".rhead").append(`<td>#</td>
<td>URL</td>
<td>Checked</td>
<td>Content Type</td>
<td>javascript File</td>`);
            
              $.each((eval(t)), (i,v)=>{
                 
                 
      $(".rbody").append(`
<tr>
     ${tbody(i)}
      ${tbody(v.url,"link")}
      ${tbody(v.checked)}
      ${tbody(v.ct)}
      ${tbody(v.src,"link")}</tr> `);
                 
                 });
         
            
            
            }
     
     }
        
  

    function button(id,click){
    $(document).on('click',id,click);
    
    }

button('.params-button',function(){ $('.result').html('');result('window.spider.href_params')    });
button('.paths-button',function(){ $('.result').html('');result('window.spider.href_path')    });
button('.xss-button',function(){ $('.result').html('');result('window.spider.XSS',2)    });
button('.rd-button',function(){ $('.result').html('');result('window.spider.openrd',3)    });
button('.base-button',function(){ $('.result').html('');result('window.spider.base64',5)    });






        

var onIframeReady = function($i, successFn, errorFn) {
                try {
                    const iCon = $i.first()[0].contentWindow,
                        bl = "about:blank",
                        compl = "complete";
                    const callCallback = () => {
                        try {
                            const $con = $i.contents();
                            if($con.length === 0) { // https://git.io/vV8yU
                                throw new Error("iframe inaccessible");
                            }
                            successFn($con);
                        } catch(e) { // accessing contents failed
                            errorFn();
                        }
                    };
                    const observeOnload = () => {
                        $i.on("load.jqueryMark", () => {
                            try {
                                const src = $i.attr("src").trim(),
                                    href = iCon.location.href;
                                if(href !== bl || src === bl || src === "") {
                                    $i.off("load.jqueryMark");
                                    callCallback();
                                }
                            } catch(e) {
                                errorFn();
                            }
                        });
                    };
                    if(iCon.document.readyState === compl) {
                        const src = $i.attr("src").trim(),
                            href = iCon.location.href;
                        if(href === bl && src !== bl && src !== "") {
                            observeOnload();
                        } else {
                            callCallback();
                        }
                    } else {
                        observeOnload();
                    }
                } catch(e) { // accessing contentWindow failed
                    errorFn();
                }
            };

          
   
        
       function getAllUrlParams(url) {

  // get query string from url (optional) or window
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  // we'll store the parameters here
  var obj = {};

  // if query string exists
  if (queryString) {

    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];

    // split our query string into its component parts
    var arr = queryString.split('&');

    for (var i = 0; i < arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=');

      // set parameter name and value (use 'true' if empty)
      var paramName = a[0];
      var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

      // if the paramName ends with square brackets, e.g. colors[] or colors[2]
      if (paramName.match(/\[(\d+)?\]$/)) {

        // create key if it doesn't exist
        var key = paramName.replace(/\[(\d+)?\]/, '');
        if (!obj[key]) obj[key] = [];

        // if it's an indexed array e.g. colors[2]
        if (paramName.match(/\[\d+\]$/)) {
          // get the index value and add the entry at the appropriate position
          var index = /\[(\d+)\]/.exec(paramName)[1];
          obj[key][index] = paramValue;
        } else {
          // otherwise add the value to the end of the array
          obj[key].push(paramValue);
        }
      } else {
        // we're dealing with a string
        if (!obj[paramName]) {
          // if it doesn't exist, create property
          obj[paramName] = paramValue;
        } else if (obj[paramName] && typeof obj[paramName] === 'string'){
          // if property does exist and it's a string, convert it to an array
          obj[paramName] = [obj[paramName]];
          obj[paramName].push(paramValue);
        } else {
          // otherwise add the property
          obj[paramName].push(paramValue);
        }
      }
    }
  }

  return obj;
} 