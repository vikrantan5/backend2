
// const fs = require('fs');


// const http = require('http');

// var server = http.createServer(function(req , res){
//     if(req.url == '/'){
//         fs.readFile("start.html", "utf8" ,function(err , data){
//             if(err) res.end(err)
//             else res.end(data)
//         })

//     }
//     else if(req.url == '/about'){
//          fs.readFile("mid.html", "utf8" ,function(err , data){
//             if(err) res.end(err)
//             else res.end(data)
//         })
//     }
//     else if(req.url=='/contact'){
//         fs.readFile("end.html", "utf8" ,function(err , data){
//             if(err) res.end(err)
//             else res.end(data)
//         })
//     }
// })

// server.listen(3000)