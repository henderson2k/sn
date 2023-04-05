var hosturl = 'http://m07092:80/'
//var hosturl = 'http://10.242.157.70:80/'
asset1 = ""
var clipbo = ""

url = window.location.href
//get the current browser url

main()
//setTimeout(function() {
//    main()
//}, 2000);


function main() {

    if (url.indexOf('nav_to.do') > 0) {
        console.log('ServiceNow full')

   //   var mdl = document.getElementsByClassName('modal-body');
        var ifrm = document.getElementById('gsft_main')
        var doc = ifrm.contentDocument ? ifrm.contentDocument : ifrm.contentWindow.document;
        var $ = function(id) {
            return doc.getElementById(id);
        };
    } else {
        var $ = function(id) {
            return docdocument.getElementById(id);
        };
    }

    if (url.indexOf('incident.do') > 1) {

        x = $('sys_readonly.incident.number');if (x) {casenumber1 = x.value};
        //console.log("wegotacasenumber")
        x = $('sys_display.incident.caller_id');if (x) {caller1 = x.value};
        x = $('sys_display.incident.location');if (x) {location1 = x.value};
        x = $('incident.u_contact_number');if (x) {contactnumber1 = x.value};
        x = $('sys_display.incident.u_device_tag');if (x) {asset1 = x.value};
        x = $('incident.description');if (x) {description1 = x.value};
        x = $('document_tags');if (x) {sysid1 = x.getAttribute("data-sys_id")};

    } else if (url.indexOf('sc_req_item') > 1) {

        x = $('sys_displayValue');if (x) {casenumber1 = x.value};
        x = $('sc_req_item.request.requested_for_label');if (x) {caller1 = x.value};
        x = $('sys_display.sc_req_item.u_location');if (x) {location1 = x.value};
        x = $('sc_req_item.u_contact_number');if (x) {contactnumber1 = x.value};
        x = $('sys_display.sc_req_item.u_device_tag');if (x) {asset1 = x.value};
        x = $('sc_req_item.description');if (x) {description1 = x.value};
        x = $('document_tags');if (x) {sysid1 = x.getAttribute("data-sys_id")};

    } else {
       console.log("Not an Incident or RITM")
       return;
    }

    
  //  console.log(casenumber1);
  //  console.log(caller1);
  //  console.log(location1);
  //  console.log(contactnumber1);
  //  console.log(asset1);
  //  console.log(description1);
  //  console.log(sysid1);

  //  description1 = JSON.stringify(description1)
 //   localStorage.setItem("description", description1);
  
description1 = description1.replace(/[\n]/g, '<br>'); 
description1 = description1.replace(/%/g,"PERCENT");   
description1 = description1.substring(0, 1500);

casearray = "" + asset1 + "," + casenumber1 + "," + sysid1 + "," + caller1 + "," + location1 + "," + contactnumber1 + "," + description1
//console.log(casearray)
// setTimeout(async()=>{ clipbo = await navigator.clipboard.readText();window.open(hosturl + clipbo + "," + casearray, '_blank')}, 200)
setTimeout(async()=> {clipbo = casearray}, 800)
}
