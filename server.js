//imp[orting http from node module]
const  http=require('http');
//importing app here
const app=require('./app');
//defininig port here process.env.port is enviornmental port define for node or 8020 if its not get port number then assign this port number
const port=process.env.PORT||8020;
//creting server which will listen at port
const server=http.createServer(app);
server.listen(port);
