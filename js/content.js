//load content
chrome.runtime.onMessage.addListener(function(request) {
    if(request.name == "clicked"){

    var ex = `
<!-- Button trigger modal -->
<button  style="	
	width: 150px;
height:50px;
	position: fixed;
	right: 0;
	top: 50%;
	z-index: 1000;
" id="xsserx" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenterx" onclick="$("#exampleModalCenterx").modal('show')">
Open S3c XSSER
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModalCenterx" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="false">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">FINDING XSS</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div  class="modal-body">
       <span id="logsxsserpost"></span>  <span style="display:none" id="logsxsserpostnum">0</span><br>
       <span id="logsxsserget"></span>   <span  style="display:none" id="logsxssergetnum">0</span><br>
       <span id="logsxsserhide"></span>  <span  style="display:none" id="logsxsserhidenum">0</span><br><br>
<p id="logsxsserfound">

</p>
      </div>
     
    </div>
  </div>
</div>
  `;
  
      console.log("clicked."); 
        
 


      $("body").append(ex);   
 $("#exampleModalCenterx").modal('show');

         



}
});

