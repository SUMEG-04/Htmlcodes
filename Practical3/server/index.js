const http=require("http");
const EventEmitter=require("events");
const event=new EventEmitter();
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("Server is working");
    }
    else if(req.url=="/Home"){
        res.end("Welcome to home page");
    }
    else if(req.url=="/About"){
        res.end("Hello lets know more about me");
    }
    else if(req.url=="/Gallery"){
        res.end("Its my gallery");
    }
    else if(req.url=="/Contact"){
        res.end("here is the info how to contact me");
    }
    else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end("<h1>404 error</h1>");

    }
});

server.listen(5000,"127.0.0.1",()=>{
    console.log('listinig to the port on 5000');
});

event.on("sayMyName",()=>{
    console.log("your name is sumeg");

});
event.emit("sayMyName");
event.on("checkpage",(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
});

event.emit("checkPage",200,"ok");