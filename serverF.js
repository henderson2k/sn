// open powershell as an _admin and set the following:
// set-executionpolicy remotesigned
//   Set-ExecutionPolicy unrestricted

async function getPage1() {
    //  let obj;
    
      const res = await fetch('https://raw.githubusercontent.com/henderson2k/sn/main/page1.html')
    
      Page1 = await res.text();
    //Page1 = Page1
    .replace('${location1}',location1)
    console.log("update from ASH")
    //console.log(Page1)
    }
    
    getPage1()
    
    let objectDate = new Date();
    
    var weekday = objectDate.toLocaleString("default", { weekday: "long" })
    let day = objectDate.getDate();
    let month = objectDate.getMonth();
    let year = objectDate.getFullYear();
    
    var date1 = weekday + " " + day + "/" + month + "/" + year;
    
    
    
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
    
      res.end(Page1);
    });
    
    
    server.listen(port);
    
    server.on('error', (err) => {
      console.log(err);
      process.exit(1);
    });
    
    server.on('listening', () => {
      console.log(`Listening on port ${port}`);
    });