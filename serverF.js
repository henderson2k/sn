// open powershell as an _admin and set the following:
// set-executionpolicy remotesigned
//   Set-ExecutionPolicy unrestricted

const http = require('http');
const port = process.env.PORT || 80;
let blanc = ""
let ps0 = ""
var MyApp = {}; // Globally scoped object
//var cat = localStorage.getItem('description');
//console.log(cat)
const server = http.createServer(async(req, res) => {


    // turn URL into array and name items
    inbit = req.url    // console.log(typeof inbit)

    if (inbit.indexOf('INC') > 0) {
casetype = "Incident"
      incorritm = "nav_to.do?uri=incident.do?sys_id="}
      else {
casetype = "Request"
       incorritm = "nav_to.do?uri=sc_req_item.do?sys_id="
      }
// 
  //  inbitDescription = req.url
    inbit = decodeURI(inbit)
    inbitLen = inbit.length
    inbit = inbit.substring(1, inbitLen) 
    inbit = inbit.split(",");
      clipboard = inbit[0]
      asset1 = inbit[1]
      caseno = inbit[2]
      caseid = inbit[3]
      preurl = "https://nhsscotland.service-now.com/"
    //console.log(inbit[2])
 //   leftcaseid = "" + inbit[2].substring(0, 1);
//console.log(leftcaseid)
//if (leftcaseid = "I") {
//Casetype = "Incident"
//}
//else {
//Casetype = "Request"
//endif    
//}

//console.log(leftcaseid)
     // if (leftcaseid = "I") {
      
      caseurl = preurl + incorritm + caseid 
    //}
     // else {
     //   caseurl = preurl + "sc_req_item.do?sys_id=" + caseid 
    //
  
 // }
     //    https://nhsscotland.service-now.com/nav_to.do?uri=sc_req_item.do?sys_id=
//console.log(caseID)
caller1 = inbit[4]
location1 = inbit[5]
callettel = inbit[6]


//function getSecondPart(str) {
//  return str.split("headquaters")[1];
//}
//inbitS = inbit + ""
//console.log(inbitS.split("headquaters")[1])
//descriptionpart = 
//    inbit = inbit.substring(1, inbitLen)

description1 = "" + inbit.slice(7);
function replaceGlobally(original, searchTxt, replaceTxt) {
  const regex = new RegExp(searchTxt, 'g');
  return original.replace(regex, replaceTxt) ;
}
description1 = replaceGlobally(description1, "/n/n", "<br>")
description1 = replaceGlobally(description1, "/n", "<br>")
description1 = description1.replace(/["']/g, "")
//console.log(description1)




//console.log(description1)
/* if( typeof incurl !== 'undefined' ) {
  // foo could get resolved and it's defined
} else {
  incurl = "https://nhsscotland.service-now.com/nav_to.do?uri=incident.do?sys_id="

  if (typeof CaseID !== 'undefined' ) {

  } else {
incurl2 = incurl + CaseID
}
} */

//console.log(incurl)
//console.log(CaseID)
//console.log(incurl2)
//console.log(CaseNo)

//console.log(inbit[3])
//console.log(CaseID)
// inbit = ClipB + " " + Asset1 + " " + CaseNo



//console.log('Item: ', inbit)
//inbit2 = JSON.stringify(inbit).replace(/,/g, '<br>');


function reqURLarray() {
  dompart = ""
  reqref = "" + req.headers.referer
  //dompart = reqref.replace(/^.*\/\/[^\/]+/, '')
  dompart = reqref.replace(/.*\/\/[^\/]*\//, '')
  dompart = dompart.split(",");

 return(dompart)
}

// Usage:

 async function main() {
   let reqURL = await reqURLarray();
   return(reqURL)
  }


function someAsyncFunc() {
  return new Promise(resolve => {  
resolve(dompart[1])
  });
}

await main()

//inbit = "hellow"
const dompart1 = await someAsyncFunc(dompart);


// Server-sent events endpoint
     if (req.url === '/e') { // 'e' short for events
       res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
        });
    async function spawnChild() {
           
      var spawn = require("child_process").spawn,child;
               child = spawn("powershell.exe",["c:\\Intel\\gs.ps1 " + dompart1]);
    
        for await (var data of child.stdout) {
          ps0 = blanc += data // data to string (when combined with blanc variable)
          ps0 = ps0.trim() //trim spaces at end of string
          ps0 = ps0.replace(/\n/g, "\ndata:")  //reformat ps to work as sse text  
        };
        
        blanc = ""  //clear blanc, so it doesn't stay in memory and get added to blanc next time this runs 
   
       
        res.write('data: \ndata:' + ps0 + '\n\n')
        //console.log(psstdout)
        //console.log("/// end bit ///") 
       //res.write('id: -1\ndata: end stream\n\n');
      return;
    }
      spawnChild()
  return;
  }



  if (req.url === '/f') { // 'e' short for events
    res.writeHead(200, {
   'Content-Type': 'text/event-stream',
   'Cache-Control': 'no-cache',
   'Connection': 'keep-alive',
     });

 
 async function spawnChild() {
    var spawn = require("child_process").spawn,child;
  //  console.log(global.cb1 + " for gs2")
    child = spawn("powershell.exe",["c:\\Intel\\gs2.ps1 " + dompart1]);
 
     for await (var data of child.stdout) {
       ps = blanc += data // data to string (when combined with blanc variable)
       ps = ps.trim() //trim spaces at end of string
       ps = ps.replace(/\n/g, "\ndata:")  //reformat ps to work as sse text  
     };
     
     blanc = ""  //clear blanc, so it doesn't stay in memory and get added to blanc next time this runs 

     res.write('data: \ndata:' + ps + '\n\n') 
     //console.log(psstdout)
     //console.log("/// end bit ///") 
     res.write('id: -1\ndata: end stream\n\n');
   return;
 }
 spawnChild()
return;
}

/*
if (req.url === '/g') { // 'e' short for events
  res.writeHead(200, {
 'Content-Type': 'text/event-stream',
 'Cache-Control': 'no-cache',
 'Connection': 'keep-alive',
   });
async function spawnChild() {
  var spawn = require("child_process").spawn,child;
   child = spawn("powershell.exe",["c:\\Intel\\gs.ps1 " + clipboardpart1]);

   for await (var data of child.stdout) {
     ps0 = blanc += data // data to string (when combined with blanc variable)
     ps0 = ps0.trim() //trim spaces at end of string
     ps0 = ps0.replace(/\n/g, "\ndata:")  //reformat ps to work as sse text  
   };
   
   blanc = ""  //clear blanc, so it doesn't stay in memory and get added to blanc next time this runs 

   res.write('data: \ndata:' + ps0 + '\n\n') 
   //console.log(psstdout)
   //console.log("/// end bit ///") 
  // res.write('id: -1\ndata: end stream\n\n');
 return;
}
spawnChild()
return;
}



if (req.url === '/h') { // 'e' short for events
res.writeHead(200, {
'Content-Type': 'text/event-stream',
'Cache-Control': 'no-cache',
'Connection': 'keep-alive',
});


async function spawnChild() {
var spawn = require("child_process").spawn,child;
//  console.log(global.cb1 + " for gs2")
child = spawn("powershell.exe",["c:\\Intel\\gs2.ps1 " + clipboardpart1]);

for await (var data of child.stdout) {
  ps = blanc += data // data to string (when combined with blanc variable)
  ps = ps.trim() //trim spaces at end of string
  ps = ps.replace(/\n/g, "\ndata:")  //reformat ps to work as sse text  
};

blanc = ""  //clear blanc, so it doesn't stay in memory and get added to blanc next time this runs 

res.write('data: \ndata:' + ps + '\n\n') 
//console.log(psstdout)
//console.log("/// end bit ///") 
res.write('id: -1\ndata: end stream\n\n');
return;
}
spawnChild()
return;
}
*/

// <!-- <a>${inbit}</a> -->
// <!--   <a href=" mailto:andrew.henderson2@lanarkshire.scot.nhs.uk?cc=henderson2k@gmail.com&bcc=henderson2k+test4@gmail.com&subject=SNCaseNumber%20GOESHERE&body=Signed_by:">mailto</a> -->
// Client side
  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`

    <!DOCTYPE html>
    <html lang="en" dir="ltr">
      <head>
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>

      <style></style>
      <link rel="icon" href="data:,">
        <meta charset="utf-8">
        <title>${caller1 + " -  " + caseno}</title>
      </head>
      <body>
     
  <script>

  //setTimeout(async()=>{ clipbo = await navigator.clipboard.readText();console.log(clipbo)}, 1)


  function copyToClip(str){

    function listener(e) {
      e.clipboardData.setData("text/html", str);
     e.clipboardData.setData("text/plain", str);
     e.preventDefault();
   }
   document.addEventListener("copy", listener);
    document.getElementById('foo').focus();
    document.execCommand("copy");
    document.removeEventListener("copy", listener);

 };

function sendEmail() 
{
    window.location = "mailto:xyz@yourapplicationdomain.com";
}






   function copyDivToClipboard() {
                    var range = document.createRange();
                    range.selectNode(document.getElementById("foo"));
                    window.getSelection().removeAllRanges(); // clear current selection
                    window.getSelection().addRange(range); // to select text
                    document.execCommand("copy");
                    window.getSelection().removeAllRanges();// to deselect
document.getElementById("foo").style.backgroundColor="lightgray";
                }

function changefoobackgroundback() {
document.getElementById("foo").style.backgroundColor="white";
}


function ctrla()
{

const elem = this.document.getElementById("foo");
elem.execCommand("SelectAll", true);
elem.execCommand("SelectAll");
elem.execCommand("Copy");

//this.document.execCommand("SelectAll", true);
//this.document.execCommand("SelectAll");

//this.document.execCommand("Copy");
}
</script>  



    <div>
        <div style="width: 50%; float: left; "> 
        <pre style="background-color:grey; color:white" id="log">Ping...</pre>

        <pre id="log2">Details...</pre>
        <pre>Remove-Item \\\\${asset1}\\c$\\Users\\gallagherlin\\AppData\\Local\\Temp\\* -Recurse -Force -ErrorAction SilentlyContinue</pre>
        <pre>Remove-Item \\\\${asset1}\\c$\\Windows\\Temp* -Recurse -Force -ErrorAction SilentlyContinue</pre>
        <pre>wmic /node:${asset1} product get name, version, vendor</pre>

        </div>
        <p align="center">
    
</p>

        <div  contenteditable="true" style="margin-left: 50%; padding-left: 10px;">
 

    <div onmouseleave="changefoobackgroundback()" ondblclick="copyDivToClipboard();"  id="foo" >

     
        <b>${location1}</b><br>
       <a href='${caseurl}'>${caseno}</a>&emsp;&emsp;<a href="mailto:nhsscotland@service-now.com?subject=Re: ${casetype} ${caseno}&body=Kit collected from IT Store">Kit Collected</a><br>
        <a><b>${caller1}&nbsp&nbsp&nbsp</b></a><a href='Tel:${callettel}' rel="noopener noreferrer" title="Tel:01412345678" id="m_7886791162200243950gmail-LPlnk931333" target="_blank" style="color: rgb(228, 159, 255); font-family: &quot;Times New Roman&quot;; font-size: medium;">${callettel}</a><br> 
<a href="mailto:nhsscotland@service-now.com?subject=Re: ${casetype} ${caseno}">Send Email</a>

        <a>${asset1}<a><br>
        <a style="line-height: 1.5;" >${description1}</a><br>      
    </div>




    </div>
 

    <div style="position: absolute; right: 0px; padding-right: 160px; padding-bottom: 20px" id="qrcode"></div>

<a>Hello from github version  of this file</a>
    <script type="text/javascript">
new QRCode(document.getElementById("qrcode"), "${callettel}");
</script>
    </div>
    
   
<!--
<button onclick="copyDivToClipboard();">Send e-mail</div>
<a href="mailto:andrew.henderson2@lanarkshire.scot.nhs.uk?subject=Hello&amp;body=Hello%20World">Contact</a>
    <button onclick="copyToClip(document.getElementById('foo').outerHTML)">Copy</button>
<button onclick="sendEmail();">Send e-mail</div>
    
<a onclick="copyDivToClipboard();" href="https://mail.google.com/mail/?view=cm&fs=1&to=andrew.henderson2@lanarkshire.scot.nhs.uk&su=&body=">eMail</a>
<input type="button" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=andrew.henderson2@lanarkshire.scot.nhs.uk&su=Cases&body=','_blank';copyDivToClipboard();" value="Email" />   

-->
   <a class="btn btn-primary" onclick="copyDivToClipboard();" href="https://mail.google.com/mail/?view=cm&fs=1&to=andrew.henderson2@lanarkshire.scot.nhs.uk&su=SN: Cases&body=" target="_blank">Create Email</a>
       
      </body>
      <script>
        var eventSource = new EventSource('/e');
        eventSource.onmessage = function(event) {
          if (event.lastEventId === '-1') {
            // This is the end of the stream
          eventSource.close();
          } else {
            // Process message that isn't the end of the stream...
            document.getElementById('log').innerHTML = ''
          document.getElementById('log').innerHTML += event.data + '<br>';
          }
        };
      </script>

      <script>
      var eventSource = new EventSource('/f');
      eventSource.onmessage = function(event2) {
        if (event2.lastEventId === '-1') {
          // This is the end of the stream
        eventSource.close();
        } else {
          // Process message that isn't the end of the stream...
          document.getElementById('log2').innerHTML = ''
        document.getElementById('log2').innerHTML += event2.data + '<br>';
        }
      };

      function ChangeUrl(title, url) {
        if (typeof (history.pushState) != "undefined") {
            var obj = { Title: title, Url: url };
            history.pushState(obj, obj.Title, obj.Url);
        } else {
            alert("Browser does not support HTML5.");
        }
    }
  //  setTimeout(function(){ window.history.replaceState({}, '','/');}, 120);
   //window.history.replaceState({}, '','/');
clipbo = ""





    </script>
    </html>
  `);
});


server.listen(port);

server.on('error', (err) => {
  console.log(err);
  process.exit(1);
});

server.on('listening', () => {
  console.log(`Listening on port ${port}`);
});

