var http = require('http');
// console.log('hallo');
var fs = require('fs');


// If someone ask port 8000, request coming.
http.createServer(onrequest).listen(8000)


// Handle request 8000
//if /about.html is requested.
function onrequest(req, res) {
  if (req.url === "/about.html")
  {
    console.log("Request for about.html");
    res.writeHead(200,{"Content-Type": "text/html"});
    fs.createReadStream("./mochi/about.html").pipe(res);
  }

//if /images/avatar.png is requested.
  else if(req.url === "/images/avatar.png")
  {
    console.log("Request for images/avatar.png");
    res.writeHead(200,{"Content-Type": "image/png"});
    fs.createReadStream("./mochi/images/mochi.jpg").pipe(res);
  }

//if /assets is requested.
  else if(req.url === "/assets")
  {
    console.log("Request for index.html in assets document");
    res.writeHead(200,{"Content-Type": "text/html"});
    fs.createReadStream("./mochi/assets/index.html").pipe(res);
  }

////if /images is requested.
//  else if(req.url === "/images")
//  {
//    console.log("Request for images");
//    res.writeHead(200,{"Content-Type": "text/html"});
//    fs.createReadStream("./mochi/assets/index.html").pipe(res);
//  }

//if something goes wrong send 404.
  else {
    console.log("error!");
    res.writeHead(404,{"Content-Type": "text/html"});
    fs.createReadStream("./mochi/error.html").pipe(res);
  }

}
