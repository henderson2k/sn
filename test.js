var hosturl = 'http://m07092:80/'
//var hosturl = 'http://10.242.157.70:80/'
asset1 = ""
var clipbo = ""


url = window.location.href  //get the current browser url

main()


function main(){




if (url.indexOf('nhsscotland.service-now.com/') > 0){    

var mdl = document.getElementsByClassName('modal-body');
var ifrm = document.getElementById('gsft_main')
var doc = ifrm.contentDocument? ifrm.contentDocument: ifrm.contentWindow.document; 
var $ = function( id ) {return doc.getElementById( id );};
}
else {
console.log("exit")
}

if (url.indexOf('incident') > 1){
          var ct = "i"
          console.log("i (Incident)")
          } else if (url.indexOf('sc_task') > 1) {
          var ct = "t"
          console.log("t (SC Task)")
          } else {
          var ct = "r"
          console.log("r (Request Task)")
          }

          
if (ct == "i"){
 x = $('sys_readonly.incident.number');if(x){casenumber1 = x.value};
 x = $('sys_display.incident.caller_id');if(x){caller1 = x.value};
 x = $('sys_display.incident.location');if(x){location1 = x.value};
 x = $('incident.u_contact_number');if(x){contactnumber1 = x.value};
 x = $('sys_display.incident.u_device_tag');if(x){asset1 = x.value};
 x = $('incident.description');if(x){description1 = x.value};
 x = $('document_tags');if(x){sysid1 = x.getAttribute("data-sys_id");   
 console.log("eh?")              
} else {

 //x = $('sys_displayValue');if(x){casenumber1 = x.value};
 //x = $('sc_req_item.request.requested_for_label');if(x){caller1 = x.value};
 //x = $('sys_display.sc_req_item.u_location');if(x){location1 = x.value};
 //x = $('sc_req_item.u_contact_number');if(x){contactnumber1 = x.value};
 //x = $('sys_display.sc_req_item.u_device_tag');if(x){asset1 = x.value};
 //x = $('sc_req_item.description');if(x){description1 = x.value};
 //x = $('document_tags');if(x){sysid1 = x.getAttribute("data-sys_id");  
console.log("else request stuff")
//delete(clipbo)

}

