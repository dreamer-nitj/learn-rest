var http=require('http');
var url=require('url');
http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'});
  var q=url.parse(req.url,true).query;
  var text1="1";
  var text="Hello "+q.name;
  if (q.name) {
    res.end(JSON.stringify({ id:1,
              content:text}));
  }else{
    res.end(JSON.stringify({ id:1,
    content:"Hello World"}));
  }

}).listen(8080);
