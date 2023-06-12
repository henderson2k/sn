url = window.location.href
var newArray = ""
main()

async function main() {

    if (url.indexOf('nav_to.do') > 0) {  // it's the Main SN 
        //var mdl = document.getElementsByClassName('modal-body');
        var ifrm = document.getElementById('gsft_main')
        var doc = ifrm.contentDocument ? ifrm.contentDocument : ifrm.contentWindow.document;
      
    } else {  // it's a pop-out
      
        var doc = document
        $ = function(id) {return doc.getElementById(id);};
        
        if (url.indexOf('incident.do') > 1) {
            console.log("Incident")
            Incident()
              //return;
        } else if (url.indexOf('sc_req_item') > 1) {
            console.log("RITM")
  
        }
    }


function Incident(){

    // x = $('sys_readonly.incident.number');if (x) {casenumber1 = x.value};
    // x = $('sys_display.incident.caller_id');if (x) {caller1 = x.value};
    //     x = $('sys_display.incident.location');if (x) {location1 = x.value};
    //     x = $('incident.u_contact_number');if (x) {contactnumber1 = x.value};
    //     x = $('sys_display.incident.u_device_tag');if (x) {asset1 = x.value};
    //     x = $('incident.description');if (x) {description1 = x.value};
    //     x = $('document_tags');if (x) {sysid1 = x.getAttribute("data-sys_id")};
 //    x = $('sn_form_inline_stream_container');if (x) {notez = x.innerHTML};
console.log("hi")
}


}