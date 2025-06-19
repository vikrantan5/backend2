// import express from 'express'

// const app = express()

// app.get('/api/testing', (req, res) => {
//   res.send('Hello World')
// })

// app.listen(3000)







//////////file handling revision///////// 28-04-2025

// const fs = require('fs');


// fs.writeFile("vikrant.txt" , "hey this is vikrant" , function(err ){
//       if (err){
//         console.log(err);
//       }
//       else{
//         console.log("file Created successfully")
//       }
// })


const fileSystem = require('fs')

// fileSystem.writeFile("nisu.txt" , "hello nisi kaise ho" , function(err){
//     if(err){
//       console.log(err)
//     }
//     else{
//       console.log("file created sucessfully")
//     }
// })


// fileSystem.readFile("nisu2.txt", "utf8" , function(err , data){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log(data)
//   }
// })



// fileSystem.appendFile("nisu.txt" , " nahi nahi mera naam vikrant singh hai" , function(err){
//   if(err){
//     console.log(err);

//   }
//   else{
//     console.log("data appended successfully")
//   }
// })



// fileSystem.rename("nisu.txt" , "nishab.txt" , function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("renamed sucessfully")
//   }
// })



// fileSystem.unlink("nishab.txt" , function(err){
//   if(err){
//     console.log(err)
//   }
//   else{
//     console.log("file deleted succesfully")
//   }
// })


// fileSystem.mkdir("viks" , function(err){
//   if(err){
//     console.log(err)
//   }
//   else{
//     console.log("folder created")
//   }
// })

//  fileSystem.writeFile("./viks/nisu.txt" , "hello nisi kaise ho" , function(err){
//      if(err){
//        console.log(err)
//      }
//      else{
//        console.log("file created sucessfully")
//      }
//  })


// fileSystem.readdir("viks" ,{withFileTypes: true}, function(err , files){
//     if(err){
//       console.log(files)
//     }
//     else{
//       console.log(files)
//     }
// })

//symbol 1 file // symbol 2 folders



// // // // // // // // folder delete

// fileSystem.rm("viks", {recursive: true} , function(err){
//   if(err){
//     console.log(err)
//   }
//   else{
//     console.log("folder deleted successfully")
//   }
// })


// fileSystem.writeFileSync("hey.txt" , "main thik hoon");




// const http = require('http');

// var server = http.createServer(function(req , res){
//   res.end("chal ehra hai")

// })


// server.listen(3000);







// const http = require('http');

// const server =  http.createServer(function(req  , res){

//   if(req.url === '/' ){
//     res.end("hey")
//   }
//   else{
//     res.end("page not found")
//   }
  
    
// })


// server.listen(3000)




