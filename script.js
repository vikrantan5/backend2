// // variables

// // var a =12;
// // let b = 13;
// // a=22;
// // b=33;

// // var a = 12; //variables create
// // let b = 13;

// // a=22; //variables update

// // data types
// // primitive dn references
// // [] , () , {}  - references datatype

// // var a = 12;
// // var c = a;
// // var a = 12;
// // var b = [1,2,3];
// // var d = [...b];
// // ... is spread operator

// // var a = [1 , 2 , 3 ]
// // var c = [...a];
// // var a = {name:'vikrant' , type:'placric'};
// // var c = {...a};

// // console.log(typeof 42);

// // d.pop()
// // console.log(d.pop());

// // var a= {name: 'a' , type:'plastic'}
// // var b = {...a};
// // b.name = 'b';

// // var a

// // AND && || OR operator
// // 12 && 13

// // for(var i =0 ; i<10 ; i++){
// //     console.log(i);
// // }

// //  var arr = [1,2,3,4,5,6,7];
// //  arr.forEach(function(val , ind){
// //      console.log(val+2 , ind);
// //  })

// // var vrr = ["vikrant" , "neel" , "mummmy"];
// // vrr.forEach(function(value){
// //     console.log(value + " " + "singh");
// // })

// // var obj = {name:"vikrant" , age:16}

// // for(var value in obj){
// //     console.log(value , obj[value])
// // }

// //  var arr = [1,2,3,4,5,6,7,8,9,10];
// //  arr.forEach(function(value, index){
// //     console.log(value+2 )
// //  })

// // var obj ={name:"vikrant" , age : 18}
// // for(var value in obj){
// //     console.log(value , obj[value])
// // }

// // console.log(5 =="5")

// // function abcd (){
// //     // function statements

// // }

// // function(){
// //     // anonymous
// // }

// // ()=>{
// //     // fat arrow function
// // }

// // a =>{
// //     // fat arrow function with one parameter
// // }

// // ()=>{
// //     return ;
// // }

// // console.log(3+4+"5")

// // function getSongs(){
// //     setTimeout(function(){
// //         console.log("sogs aa gye");
// //     }, 2000)
// // }
// // getSongs();

// // function connectToServer(cbfn){
// //     console.log("connecting to the server...");
// //     setTimeout(function(){
// //         console.log("connected to the server...");
// //         cbfn();
// //     }, 2000)
// // }

// // function fetchCourses(cbfn){
// //     console.log("fetching courses...");
// //     setTimeout( ()=>{
// //         cbfn(["course 1" , "course 2" , "course 3"]);
// //     }, 2000)
// // }
// // connectToServer(function(){
// //     fetchCourses(function(data){
// //         console.log(data);

// //     });
// // });

// // function connectToServer(cbfn){
// //     console.log("connecting to server...");
// //     setTimeout(function(){
// //         console.log("connected to server...");
// //         cbfn();
// //     }, 2000)
// // }

// // function fetchCoueses(cbfn){
// //     console.log("fetching couses...");
// //     setTimeout(function(){
// //         cbfn(["course 1" , "course 2" , "course 3"]);
// //     }, 2000)
// // }

// // connectToServer(function(){
// //     fetchCoueses(function(data){
// //         console.log(data);
// //     });
// // });

// // function getSongs(){
// //     setTimeout(function(){
// //         console.log("song aa gye")
// //     }, 2000)
// // }

// // function getMoreSongs(){
// //     setTimeout(function(){
// //         console.log("more songs aa gye")
// //     }, 3500)
// // }

// // getSongs();
// // getMoreSongs();

// // callbacks

// // function connectToServer(cbfn){
// //     console.log("connecting to server....");
// //     setTimeout(function(){
// //         console.log("connected to server")
// //         cbfn();
// //     }, 2000)
// // }

// // function fetchCourses(){
// //     console.log("fetching courses....");
// //     setTimeout(function(){
// //         console.log(["lala" , "hehe" , "chi hi hi"]);
// //     },2000)
// // }

// // connectToServer(function(){
// //     setTimeout(function(){
// //         fetchCourses();
// //     },2000)

// // });

// // // promises=========================================
// // function connectToServer(){
// //     console.log("connecting to server...");
// //     return new Promise(function(resolve , reject){
// //         setTimeout(function(){
// //             resolve("connected");

// //         }, 2000)
// //     })

// // }
// // function getCourses(){
// //     console.log("Getting Courses...");
// //     return new Promise(function(resolve , reject){
// //         setTimeout(function(){
// //             resolve(["course 1" , "course 2" , "course 3"]);
// //         })
// //     })
// // }

// // connectToServer()
// // .then(function(response){
// //     console.log(response);
// //     return getCourses();

// // })
// // .then(function(response){
// //     console.log(response);

// // })

// // function connectToServer(){
// //     console.log("connecting to server...");
// //     return new Promise(function(resolve , reject){
// //             setTimeout(function(){
// //                 resolve("connected....");
// //             }, 2000)
// //     })
// // }

// // function getCourses(){
// //     console.log("getting courses...")

// //     return new Promise(function(resolve , reject){
// //         setTimeout(function(){
// //             resolve(["course 1","course 2","course 3"])
// //         }, 2000)
// //     })
// // }

// // connectToServer()
// // .then(function(response){
// //     console.log(response);

// //      return getCourses()
// // })
// // .then(function(response){
// //     console.log(response)
// // })

// // understanding how to organize code into modules and how to import/export in node.js

// // CJS
// // var a = 12;
// // var b =13;

// // module.exports = {a ,b};

// // ye pattern sirf ek baar likh sakte hai ===> module.exports =

// // module.exports.a = a;
// // module.exports.b = b;

// // file system======================================================

// // write file
// // read file
// // append file
// // update file
// // delete file
// // folder creation
// // copy rename remove

// // const fs = require('fs');

// // fs.writeFile("vikstar.txt","hello nisu", function(err ){
// //     if(err) console.log(err);
// //     else console.log("file created")
// // })

// // fs.readFile("vikstar.txt","utf8" , function(err , data){
// //     if(err) console.log(err);
// //     else console.log(data);
// // })

// // fs.appendFile("vikstar.txt" ," appended data " , function(err){
// //     if(err) console.log(err);
// //     else console.log("appended data");

// // } )

// // fs.rename("vikstar.txt" , "vikrant.txt" , function(err){
// //     if (err) console.log(err);
// //     else console.log("done");
// // })

// // fs.unlink("vikstar.txt" ,function(err){
// //     if(err) console.log(err);
// //     else console.log("file deleted successfully...")
// // })

// // fs.unlink("vikstar.txt" , function(err){
// //     if(err) console.log(err);
// //     else console.log("file deleted successfully....")
// // })

// // fs.mkdir("lolo" , function(err){
// //     if(err) console.log(err);
// //     else console.log("folder created")
// // })

// // fs.readdir("lolo" ,{withFileTypes: true}, function(err , files ){
// //     if(err) console.log(err);
// //     else console.log(files);
// // })

// // fs.rm("lolo" , {recursive: true},  function(err){
// //     if(err) console.log(err);
// //     else console.log("folder deleted .....")
// // })

// // fs.writeFileSync("het.txt" , "whatever")

// // backend revision

// // //  variables

// // var a = 12;
// // var b = 13;

// // datatypes

// // primitives and references
// // () {} [ references type]
// // primitive can copy but references will not

// // var a = [12 ,22 , 33 , 6]
// // var b = [...a];
// // b.pop();
// // console.log(a); // [12, 22, 33]
// // console.log(b); // [12, 22, 33]

// // var c = {name: "vikrant" , type:"plastic"};ddddd
// // var d = {...c};
// // d.name= "neel";
// // console.log(c); // {name: "vikrant", type: "plastic"}
// // console.log(d); // {name: "neel", type: "plastic"}

// // OPerators
// // + - / * %

// // loop operators
// // && ||

// // console.log(13 && 12); // 13
// // console.log(12 || 13); // 12

// // 0 , false , undefined , null , NaN , ""  , document.allare falsy values

// // loops in javascript

// // for for in for each

// // for(startTransition; ending; change){

// // }

// // for(var i = 0; i<12; i++){
// //     console.log(i);
// // }

// // var arr = [1,2,3,4,5,6,7,8,9,10];
// // // arr.forEach(function(value, index){
// // //     console.log(value + 2 , index)
// // // })

// // // for each array pe lagta hai
// // // for in objects pe lagta ghai

// // // var obj = {name: "vikrant" , age: 16};
// // // for(var value in obj){
// // //     console.log( obj[value]);
// // // }

// // // conditional statement

// // // if(12){
// // //     console.log("12 is truthy");
// // // }
// // // else{
// // //     console.log("12 is falsy");
// // // }

// // // // ternary operator
// // // 12>13 ? console.log("12 is greater") : console.log("13 is greater");

// // // funtion in js

// // // function statements

// // function abcd(){

// // }

// // // anonymous function
// // // function(){

// // // }

// // // fat arrow function
// // ()=>{

// // }

// // a =>{
// //     fat arrow with one parameter
// // }

// // fat arrow withimplicit return
// // ()=> console.log true

// // asynchronous javascript

// // js code ko line by line karat hai

// // kuch lamba code ko line by line nahi karat hai wo asynchronous code hota hai

// // callbacks , promises and async await

// // used for asynchrounous code

// // function getSongs(){
// //     setTimeout(function(){
// //         console.log("songs aa gye");
// //     }, 2000)
// // }
// // function getMoreSongs(){
// //     setTimeout(function(){
// //         console.log("more songs aa gye");
// //     }, 3500)
// // }

// // function connectToServer(){
// //     console.log("contnecting to server")
// //     setTimeout(function(){
// //         console.log("connected to server")
// //     }, 2000)
// // }

// // connectToServer(function(){

// // })

// // call backs use to write asynchronous code

// // function connectToServer(cbfn){
// //     console.log("connecting to server...");
// //     setTimeout(function(){
// //             console.log("server conected...");
// //             cbfn();
// //     },2000)

// // }

// // function fetchCourses(cbfn){
// //     console.log("fetching courses...");
// //     setTimeout(function(){
// //         cbfn(["course 1", "course 2", "course 3"]);
// //     }, 2000)
// // }

// // connectToServer(function(){
// //     fetchCourses(function(data){
// //             console.log(data)
// //     });
// // });

// // function connectToServer(cbfn){
// //     console.log("connecting to server...");
// //     setTimeout(function(){
// //         console.log("connected to server...");
// //         cbfn();
// //     },2000);
// // }

// // function fetchCourses(cbfn){
// //     console.log("fetching Courses...");

// //     setTimeout(function(){
// //         cbfn(["course 1", "course 2", "course 3"]);

// //     },2000)

// // }

// // connectToServer(function(){
// //     fetchCourses(function(data){
// //         console.log(data);
// //     })
// // });

// // function purchaseCourse(cbfn){
// //     console.log("Select course...");
// //     setTimeout(function(){
// //         console.log("Course Selected");
// //         cbfn();
// //     },2000);
// // }

// // function makePayments(cbfn){
// //     console.log("Choose payment method...");
// //     setTimeout(function(){
// //         console.log("payment Method Choosed")
// //         cbfn();
// //     },2000)
// // }

// // function payment(cbfn){
// //     console.log("Making Your Payment...");
// //     setTimeout(function(){
// //         console.log("Payment Successful");
// //         console.log("You can now access the course");
// //         cbfn(["Sheriyans Backend Domination" ,"SHeriyans frontEnd"] )
// //     },2000);
// // }

// // purchaseCourse(function(){
// //     makePayments(function(){
// //         payment(function(data){
// //             console.log(data);

// //         });
// //     })
// // });
// ====================================================3
// // function flipKart(cbfn){
// //     console.log("Entering to Flip kart App");
// //     setTimeout(function(){
// //         console.log("Login you Account");
// //         cbfn();
// //     },2000)
// // }

// // function accountLogged(cbfn , cbfn2){
// //     console.log("Account Logged in successfully");
// //     setTimeout(function(){
// //         console.log("Choose Items");
// //         cbfn("['item 1', 'item 2', 'item 3']");
// //         console.log("items Selected");
// //         cbfn2();
// //     },2000)

// // }
// // function goToKart(items , cbfn){
// //     console.log("Selected Items Are");
// //     setTimeout(function(){
// //         items(["item 1", "item 2", "item 3"]);
// //         console.log("Items Added to Kart");
// //         cbfn();

// //     },2000)
// // }

// // function makePayments(pay ,cbfn){
// //     console.log("choosing payment method");
// //     setTimeout(function(){
// //         console.log("choose payment method")
// //        pay(["upi", "credit card", "debit card"]);
// //         console.log("Payment mehtod selected");
// //         cbfn();
// //     },2000)
// // }

// // function startPayment(cbfn){
// //     console.log("payment Started");
// //     setTimeout(function(){
// //         console.log("payment Done Successfully");
// //         cbfn();
// //     },2000)
// // }

// // function orderId(cbfn){
// //     console.log("Order will be delievered tomorrow");
// //     setTimeout(function(){
// //         console.log("Order ID is 123456789");
// //         cbfn();

// //     },2000)
// // }

// // flipKart(function(){
// //     accountLogged(function(data){
// //         console.log(data);
// //     },
// //     function(){
// //         goToKart(function(items){
// //             console.log(items);
// //         },
// //     function(){
// //         makePayments(function(pay){
// //             console.log(pay);
// //         },
// //          function(){
// //             startPayment(function(){
// //                 orderId(function(){
// //                     console.log("Thank you for shopping with us");
// //                 });

// //             });
// //          })
// //     })

// //     }
// //     )

// // })

// // promises

// // // promises

// // function connectToServer(){
// //     console.log("connecting to server...");

// //     return new Promise(function(resolve , reject){
// //         setTimeout(function(){
// //             resolve("connected to server");
// //         },2000)
// //     })
// // }

// // function getCourses(){
// //     console.log("getting courses...");
// //     return new Promise(function(resolve , reject){
// //         setTimeout(function(){
// //             resolve(["course 1", "course 2", "course 3"]);
// //         },2000)
// //     })
// // }

// // connectToServer()
// // .then(function(response){
// //     console.log(response);

// //     return getCourses();
// // })
// // .then(function(response){
// //     console.log(response);
// // })

// // promises

// // function connectToServer(){
// //     console.log("connecting to server..")
// //     return new Promise(function(resolve , reject){
// //         setTimeout(function(){
// //             resolve("server Connected");
// //         },2000)
// //     })
// // }

// // function getCourses(){
// //     console.log("getting courses...");
// //     return new Promise(function(resolve , reject){
// //         setTimeout(function(){
// //             resolve(["item 1" , "item 2"])
// //         },2000)
// //     })
// // }

// // connectToServer()
// // .then(function(response){
// //     console.log(response);

// //     return getCourses()
// // })
// // .then(function(response){
// //     console.log(response);
// // })

// // .catch()

// // function connectToServer(){
// //     console.log("Connecting to Server...");
// //     return new Promise(function(resolve , reject){
// //         setTimeout(function(){
// //             resolve("Server Connected");
// //         },2000)
// //     })
// // }

// // function fetchCourses(){
// //     console.log("fetching courses...");
// //     return new Promise(function(resolve , reject){
// //         setTimeout(function(){
// //             resolve(["item 1" , "item 2" , "item 3"])
// //         },2000)
// //     })
// // }

// // connectToServer()
// // .then(function(response){
// //     console.log(response);

// //     return fetchCourses()
// // })
// // .then(function(response){
// //     console.log(response);
// // })
// // .catch()

// // call back

// // function connectToServer(cbfn){
// //     console.log("connecting To server...");
// //     setTimeout(function(){
// //         console.log("server connected...");
// //         cbfn();
// //     },2000)
// // }

// // function fetchCourses(cbfn){
// //     console.log("fetching Courses");
// //     setTimeout(function(){
// //         cbfn(["course 1" , "course 2" , "course 3"])

// //     },2000)
// // }

// // connectToServer(function(){
// //     fetchCourses(function(data){
// //         console.log(data);
// //     })
// // })

// // Call back Canva

// // function CanvaStart(cbfn){
// //     console.log("Welcomw to Canva");
// //     setTimeout(function(){
// //         console.log("Enter Canva");
// //         cbfn();
// //     },2000)
// // }

// // function LoginCanva(cbfn){
// //     console.log("Login to canva");
// //     setTimeout(function(){
// //         console.log("Logged In To Canva");
// //         cbfn();
// //     },2000)
// // }

// // function TemplateSelect(Tem , cbfn){
// //     console.log("Select what You Want To do");
// //     setTimeout(function(){
// //         Tem(["thumbnail" , "Tiktok" ,  "video"]);
// //         console.log("Thumbnail Selected...");
// //         cbfn();
// //     },2000)

// // }

// // function EditTemp(Edit , cbfn){
// //     console.log("Change What you want");
// //     setTimeout(function(){
// //         Edit(["crop" , "brightness"]);
// //         console.log("Changes Done");
// //         cbfn();

// //     },2000)

// // }

// // function renDer(){
// //     console.log("Render Your Image");
// //     setTimeout(function(){
// //         console.log("Image Rendered");
// //     },2000)
// //     setTimeout(function(){
// //         console.log("Thanks for choosing canva");
// //     },2000)

// // }

// // CanvaStart(function(){
// //     LoginCanva(function(){
// //         TemplateSelect(function(data){
// //             console.log(data);
// //         },
// //         function(){
// //         EditTemp(function(data){
// //             console.log(data);
// //         },
// //         function(){
// //             renDer();
// //         }
// //     )
// //     }
// //     )
// //     },

// // )

// // })

// // callback

// // function Canva(){
// //     console.log("welcome To canva");
// //     return new Promise(function(resolve  , reject){
// //         setTimeout(function(){
// //             resolve("Enter Canva");
// //         },2000)
// //     })
// // }
// // function LoggedIn(){
// //     console.log("Logged in to canva for further things");

// //    return new Promise(function(resolve , reject){
// //          setTimeout(function(){
// //             resolve("Logged in to Canva");

// //     },2000)
// //    })
// // }

// // function SelectTemp(){
// //     console.log("Select What You want to do");
// //     return new Promise(function(resolve , reject){
// //         setTimeout(function(){
// //             resolve( [ "thumbnail" , "Tiktok" ,  "video"]);

// //         },2000)

// //     })
// // }

// // function EditTemp(){
// //     console.log("Change What you want to do");
// //     return new Promise(function(resolve , reject){
// //         setTimeout(function(){
// //             resolve( [ "crop" , "brightness"])

// //     },2000)
// //     })
// // }

// // function Render(){
// //     console.log("Rendering Your Image");
// //     return new Promise(function(resolve , reject){
// //         resolve("Thanks for choosing Canva");
// //     },2000)
// // }

// // Canva()
// // .then(function(response){
// //     console.log(response);
// //     return LoggedIn()
// // })
// // .then(function(response){
// //     console.log(response)

// //     return SelectTemp()
// // })
// // .then(function(response){
// //     console.log(response);
// //     console.log("Thumbnail selected...")

// //     return EditTemp()
// // })
// // .then(function(response){
// //     console.log(response);
// //      console.log("changes done");

// //     return Render()
// // })
// // .then(function(response){
// //     console.log(response)
// // })

// // undestanding how to organize code into modules and how to imort / export them in nodemon.js

// // cjs    ---- esm

// // esm --- import export
// // cjs ---- require  module.exports

// // var a  = 12;
// // var b  = 14;
// // module.exports = {a ,b }; -- ye ek baar likh sakte hai

// // module.exports.a = a;
// // module.exports.b = b;

// // how internet works

// // connects to another computer systems

// // laptop se humne internet access karna chaha to instaruction humare laptop se radiowaves ke through nearest tower tak jayega fir wo electric signal ban ke zamin ke raaste isp tak jayega isp (internet service provider) fir isp chechk karega ki jo hum khoj rahe hai wo kahi black listed to nhi hai agar hai to wo use whi band kar dega otherwise wo us server tak use pahuch dega

// // ip address

// // ipaddress device ki pahchan hoti hai internet pe ..ye uski koi khud ki id nhi hoti hai jab koi device internet se connect hota hai to use ek unique code milta hia jise ip addesss kahte haui aur ye ip addreee ISP devices ko allot karti hai... aut ye DHCP protocol ke dwaara diya jaata hai
// // (DYNAMIC HOST CONFIGURATION PROTOCOL)

// // ipv4 : 66.94.29.13
// // ipv6: 2001:0000:3238:DEF!:0063:0000:0000:FEFB

// // MAC address

// // every device has its own physical address in its chip . ye us device ka ek local area ka pahchan hota hai jo use local network se jorta hai ..ye device ka pahchan hota hai locally  , aur pure internet pe jo pahchan hota hai device ka wo ip address hai

// // proxy
// // A aur B ko baat chit karna hai to A , C ko message bhejega aur C , B ko bhejega the C response C ko bhejega the C response A ko bhejega ...

// // agar kuch ban hai to proxy ka use karte hai us website tak pahuchne ke liye

// // data incripted nhi rahta hai isp padh sakta hai data

// // VPN(Virtual Private Network)
// // data increpted hota hai
// // used to anonymous

// // SERVER ek computersystem hota hai jo prgrammed hota hai request to accept ans response ko bhejne ke liye

// // reverse proxy : proxy client side pe hota hai but reverse proxy server side pe set hoti hai , fir reverese proxy check karega ki request me koi malicious chiz to nhi hai na , kahi same client baar baar same request to nhi fek rha n DDOS attack to nhi kar rha hai  ,rete limitting.....

// // protocols

// // rules of internet
// // alag alag browser  ek hi tarike se chiz ko follow kare uske liye rules banaye gye hai whi rules hai protocol

// // ISP internet service provider
// // humare phone se request radiowaves ke through air me gya fir hawa se wo newrest tower me gya ...AbortController.wo towerisp ka hi hai fir wo tower se electric signal k thorough isp me gya to saare instruction ko le jane jo kharcha hua sab isp ne kiya ......and country to country v data wires ke through isp hi pahuchate hai

// // TCP/IP protocol

// // TCP: har data pahuchne ke liye acknowledgement mangata hai ki data pahuch a ki nahi .....

// // IP: (internet protocol) :internet pe aapki pahchan IP adrees kahlata hai aur IP protocol ke through wo IP adress hume milta hai ISP ke dwara DHCP se milta hai

// // UDP: streaming services
// // fekte raho data ko check mat karo
// // guaratee nhi deta ki pahuchega ki nhi

// // HTTP has 3 version
// // 1st version ,, cunjtion TCP/IP
// // 2nd version  TCP/IP
// // 3rd version ,,,, TCP and UDP

// // ======================================================

// // nodejs javascript server runtime environment

// // nonblocking io and asynchronous

// // built on google chrome V8 engine  ,, ryan dell ne bode js banaya.

// // can make js as a server

// // LibUV in nodejs (iske wajah se hi nodejs asynchronous task kar paata hai  )

// // Node Js is Event driven

// // used to create command line app or realtime app

// // node js is not good for which which wants alot cpu computational power

// // nodejs single threaded language  .,,dukkan daar
// // aur single thread kaam karne bolta hai event loop ko
// // event loop kaam ko perform karta hai

// // client se request lega event loop ko dega aur event loop se response lega aur client ko dega

// // NPM is jut like strore jaha se packages install kar sakte hai it has not any full form
// // PACKAGES DOWNLOAD hota hai
// // apne code ko npm me daaal sakte hai ise open source cntribution kahte hai

// // npm install karene ke liye

// // npm init -y   <=creates package json

// // package json has MAIN and SCRIPT part

// // MAIN: hai ki aapki kon si file se execution shuru hoga

// // SCRIPT: terminal pe kon si command se karega

// // Dependency : aapne kon se packages install ki hai

// // dev-Dependencies: aapka laptop pe dev dependency use hoga aur jab production pe jaake dev dependecies use nhi hoga

// function Youtube(cbfn){
//     console.log("Enter Youtube");
//     setTimeout(function(){
//         console.log("Logged in to Youtube");
//         cbfn();
//     },2000)
// }

// function createAccount(cbfn){
//     console.log("Create Account");
//     setTimeout(function(){
//         console.log("account Created");
//         cbfn();

//     },2000)
// }

// function ChooseVideo(video , cbfn){
//     console.log("Choose Video");
//     setTimeout(function(){
//         video(["video 1" , "video2" , "video3"]);
//         cbfn();

//     },2000)
// }

// function video(cbfn){
//     console.log("video opened");
//     setTimeout(function(){
//         console.log("video speed 2x");
//         cbfn();
//     },2000)

// }

// function EndVideo(next ,cbfn){
//     console.log("Video Ended");
//     setTimeout(function(){
//         console.log("choose another video")
//             next(["suggestion 1" , "suggestion2"]);
//             cbfn();
//     },2000)
// }

// function Ended(){
//     console.log("Ended");
//     setTimeout(function(){
//         console.log("thanks for choosing youtube");

//     },2000)
// }

// Youtube(function(){
//     createAccount(function(){
//         ChooseVideo(function(data){
//                 console.log(data);
//         },
//         function(){
//            video(function(){
//              EndVideo(function(data){
//                 console.log(data);
//             },
//         function(){
//             Ended();
//         })
//            })

//         })

//     })

// })

// function Youtube(){
//     console.log("Enter Youtube");

//      return new Promise(function(resolve , reject){
//         setTimeout(function(){
//        resolve("Logged in to Youtube");
//     },2000)

//     })
// }

// function Account(){
//     console.log("Create Account");

//      return new Promise(function(resolve , reject){

//         setTimeout(function(){
//             resolve("Account Created");

//     },2000)

//         })

// }

// function ChooseVideo(){
//     console.log("Choose Videos");

//      return new Promise(function(resolve , reject){
//         setTimeout(function(){
//                     resolve(["video 1" , "video2" , "video3"])

//     },2000)
//     })
// }

// function videoSpeed(){
//     console.log("video speed 2x");

//       return new Promise(function(resolve , reject){
//           setTimeout(function(){
//                         resolve("video Ended");

//     },2000)
//         })
// }

// function NextVideo(){
//     console.log("choose another video");

//       return new Promise(function(resolve , reject){

//         setTimeout(function(){
//                         resolve(["suggestion 1" , "suggestion2"]);

//     },2000)
//         })

// }
// function Ended(){
//     console.log("Ended");

//      return new Promise(function(resolve , reject){

//         setTimeout(function(){
//                         resolve("Thenks For Choosing Youtube");

//     },2000)
//         })
// }

// Youtube()
// .then(function(response){
//     console.log(response);
//     return Account()
// })
// .then(function(response){
//     console.log(response);
//     console.log("get Started");

//     return ChooseVideo()
// })
// .then(function(response){
//     console.log(response);
//     console.log("video opened");
//     return videoSpeed()
// })
// .then(function(response){
//     console.log(response);
//     console.log("Video Ended");
//     return NextVideo()
// })
// .then(function(response){
//     console.log(response);
//     return Ended()
// })
// .then(function(response){
//     console.log(response);

// })
// .catch()

// // =====================================

// // file handling

// // nodejs website --->docs --->file system-->

// // for using filesystem we have two ways 1. promise base and 2. callback and sync

// // const fs = require('fs');

// // write file
// // read file
// // update file
// // append file
// // delete file
// // folder
// // rename

// // deprecated hataya ja chuka hai

// const fs = require('fs');
// // fs.writeFile("abcd.txt" ,"vikrant singh" , function(err){
// //     if(err) console.log(err);
// //     else console.log("folder created");
// // } )

// fs.writeFile("abcd.txt" , function(err , data){
//     if(err) console.log(err);

//     else console.log(data);

// })

// const fs = require('fs');

// fs.readFile("abcd.txt" ,"utf8", function(err  , data){
//     if(err) console.log(err);
//     else console.log(data);
// })

// fs.appendFile("abcd.txt" , " mera naam nisu hai" ,function(err){
//     if(err) console.log(err);
//     else console.log("append file successfully..");
// })

// fs.rename("abcd.txt" , "vikrant.txt" , function(err){
//     if(err) console.log(err);
//     else console.log("renamed successfully")
// })

// fs.unlink("vikrant.txt" , function(errr){
//     if(errr) console.log(errr);
//     else console.log("deleted successfully");
// })

// const fs  =  require('fs');
//  fs.writeFile("mainironman.txt" , "to mera ye new file hai0" , function(err){
//      if(err) console.log(err);
//      else console.log("file created successfuly");
//  })

//  fs.readFile("mainironman.txt" , "utf8" , function(err ,  data){
//      if(err) console.log(err);
//      else console.log(data)
//  })

//  fs.appendFile("mainironman.txt","ye part extra hai add hua" , function(err){
//      if(err) console.log(err);
//      else  console.log("data appended successgullt");
//  })

//  fs.rename("mainironman.txt" , "newname.txt" , function(err){
//      if(err) console.log(err);
//      else console.log("renamed successfully");
//  })

// fs.unlink("newname.txt" , function(err){
//     if(err) console.log(err);
//     else console.log("file deleted successfully");
// })

// const { fileLoader } = require('ejs');
// const fs = require('fs');

// fs.writeFile("index.txt" , "mera naam nisu hai" , function(err){
//     if(err) console.log(err);
//     else console.log("file created successfully")
// })

// fs.readFile("index.txt","utf8",function(err ,data){
//     if(err) conaole.log(err);
//     else console.log(data);
// })

// fs.appendFile("index.txt" , "ye message add kar do" , function(err){
//     if(err) console.log(err)
//         else console.log("data appende successfully")
// })

// fs.unlink("bndo.html", function(err){
//     if(err) console.log(err);
//     else console.log("deletd successfully")
// })

// fs.readdir("lolo" ,{withFileTypes: true}, function(err , files){
//     if(err) console.log(err);
//     else console.log(files)
// } )

// // for identify files and folder
// 1 - file
// 2- folder

// fs.rm("hehe2" , {recursive: true} , function(err){
//     if(err) console.log(err);
//     else console.log("files deleted")
// })

// synchronous

// const fs = require['fs'];
// let  data = fs.readFileSync("hey.txt" m "utf8");
// console.log(conjusred)

// npm se package install hota hai
// aur nodejs se module install hota hao

// const http  = require('http');

// var server = http.createServer(function(req , res){
//             res.end("chal rha hai")
// })

// server.listen(3000);

// server banane la simple tarika hao

// const http = require('http');
// var server = http.createServer(function(req , res){
//     res.end("vikrant singh sikh rha hai")
// })

// server.listen(3000)

// apne aap refresh nhi hota hai ise baar baar refresh karna parta hai node (file name ) likh ke

// for installing nodemon : npm i nodemon --save-dev

// const http = require('http')
// var server = http.createServer(function(req , res){
//     res.end("ho gya ab ehehe bas");
// })

// server.listen(3000);

// routing creation

// routing matlab alag alg url bna sakte ho aur uspe kya hoga ye v decide kar sakte ho

// frontend se kuch arha hai backend me use request

// and backend se kuch ja rha front end me wo h response

// const http = require('http');
// var server = http.createServer(function(req , res){
//     if(req.url === '/'){
//         res.end("chal gya server");

//     }
//     else if(req.url === '/profile'){
//         res.end("Yor profile");
//     }
//     else{
//         res.end("page not fount")
//     }

// })

// server.listen(3000);

// http Methods:

// get : server se kuch leke aao
// post : kuch create karo server pe
// patch: sved data ko thik karne ke liye(update) (sirf utna part jitna karna hai)
// put: use for update (pura data update karega)
// delete: post delete karne ke liye

// /http status code:

// 1XX :
// 100: server accept the request
// ex: humare lapto ne ek req bheji america ke server pe aur humara REQ PAHUCH chuka hai ye btane ke liye

// 101:req pahuchne ke baad redirect kiya jaye to aise protocol ko 101

// 2XX:
// 200: server pe req aayi , req process ho chuki hai aur successfully response ja chuka hai(OK STATUS)

// 201: aapki request kuch create kar degi server ya database me to jo response jata hai wo 201 hota hai (CREATED STATUS)

// 202: aapka laptop server ko ek asynchronous task diya hai, ab isme time lage wo kitna lagega ye nhi pta to iske liye server response dega ki thik hai aapka req process ho rha hai and take some time

// 203: humne ek server ko request bheja aur wo request server ne agle dusre server ya app ko bhej diya hai to iske liye jo response hoga to 203 "NON Authoritive unfo"

// 3XX:

// 301: jo v resource dhoodh rhe hai wo kahi aur move ho chuka hai iske liye server response bhejta hai 301 ( MOVED)

// 307: temporary redirects , data ko temporary kahi move kiya gya hai iske liya jo respose hoga wo 307 hoga

// 308: permanently moved ,, kisi data ko pemanently move kar diya hai is url pe to iske liye jo response hota hai wo 308

// 4XX :
// 400 : jo request aaya hai server pe wo bad request hai kuch malicius mila hai, iske liye server ek error bhejta hai 400

// 401: unauthorised: mujhe ek product create ya delete karne do to aapke account pe ek error aata aahi jise 401: aapko proof karna hoga ki aap authoor ho

// 403:forbidden: mujhe na user ki details dedo iske liye server mana kar dega

// 404: not found

// 5XX:
// 500:internal server error : maine ek req bhtja use process nhi kar paaya for some reason then500 :

// 502 :bad gateway (server ka p stream server fail ho chuka hai) aapne o req jis server ko di thi use= server ne agle sever ko req bhej diya and for somr reaon next wala server kharab ho gya aur response nhi bhej paaya

// 503:sevice unavialble : server too loaded
// ========================================================================
// const fs = require('fs');

// fs.writeFile("revision1.txt" , "revision kar ehe hai dekhte hai ki hota ha ki nhi" , function(err){
//     if(err) console.log(err);
//     else console.log("file created success fully")

// })

// fs.readFile("revision1.txt" , "utf8"  ,function(err , data){
//     if(err) console.log(err);
//     else console.log(data)
// })

// fs.appendFile("revision1.txt" , "ye chiz hum add kar rhe hai file me aur kuch nhi" , function(err){
//     if(err) console.log(err);
//     else console.log("file appdende successfully")
// })

// fs.rename("revision1.txt" , "nisuviks.txt" , function(err){
//     if(err) console.log(err);
//     else console.log("renamed successfully")
// })

// fs.unlink("nisuviks.txt" , function(err){
//     if(err) console.log(err);
//     else console.log("file deleted successfully");
// })

// fs.mkdir("lolo" , function(err){
//     if(err) console.log(err);
//     else console.log("folder created successfully")
// })

// fs.readdir("lolo" , {withFileTypes: true},function(err , files){
//     if(err) console.log(err);
//     else console.log(files)
// })

// fs.rm("lolo" , {recursive:true} , function(err){
//     if(err) console.log(err);
//     else console.log("folder delete");
// })

// // Server Creation

// const http = require('http');
// var server = http.createServer(function(req , res){
//     if(req.url == '/'){
//         res.end("dashboard");
//     }
//     else if(req.url == '/profile'){
//         res.end("your profile");
//     }
//     else{
//         res.end("bas kuch vi khul gya hai")
//     }
// })

// server.listen(3000)

// callback

// function Snapter(enter , cbfn){
//     console.log("Welcome to Snapster");
//     setTimeout(function(){
//         enter("Enter Snapster");
//         cbfn()

//     },2000)

// }

// function Login(data , cbfn){
//     console.log("Login to snapster")
//     setTimeout(function(){
//         console.log("Choose what you want to edit:");
//         data(["photo", "video", "template"]);
//         cbfn()

//     },2000)
// }

// function photo(data , cbfn){
//     console.log(">photo selected");
//     setTimeout(function(){
//         console.log("Choose photo editing option:")
//         data(["resize", "add filter", "adjust color"])
//         cbfn()

//     },2000)
// }

// function Filter(data , cbfn){
//     console.log("> filter applied");
//     setTimeout(function(){
//         data("Render your file...");
//         cbfn()

//     },2000)
// }

// function Thankyou(){
//     setTimeout(function(){
//         console.log("Thanks for using Snapster!")
//     },2000)
// }

// Snapter(function(enter){
//     console.log(enter)

// },
// function(){
//     Login(function(data){
//         console.log(data);
//     },
//     function(){
//         photo(function(data){
//             console.log(data);

//         },
//         function(){
//             Filter(function(data){
//                 console.log(data)

//             },
//             function(){
//                 Thankyou();
//             })
//         })
//     })
// })

// console.log("promise version=======================================")

// function CodeStudio() {
//   console.log("Welcome to CodeStudio");
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("opening App...");
//     }, 2000);
//   });
// }

// function Login() {
//   console.log("Login CodeStudio");
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("Choose a language:");
//       resolve(["C++", "Python", "JavaScript"]);
//     }, 2000);
//   });
// }

// function Select() {
//   console.log("> JavaScript selected");

//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("Choose Operation:");
//       resolve(["Run Code", "Debug", "Format Code"]);
//     }, 2000);
//   });
// }

// function Format() {
//   console.log("> Code formatted");

//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("Render Your Output");
//     }, 2000);
//   });
// }

// function Thank() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("Thanks for choosing CodeStudio!");
//     }, 2000);
//   });
// }

// CodeStudio()
//   .then(function (response) {
//     console.log(response);

//     return Login();
//   })
//   .then(function (response) {
//     console.log(response);
//     return Select();
//   })
//   .then(function (response) {
//     console.log(response);
//     return Format();
//   })
//   .then(function (response) {
//     console.log(response);
//     return Thank();
//   })
//   .then(function (response) {
//     console.log(response);
//   });

// =================express================================
// installing express : npm i express

// const express = require("express");
// const app = express();

// // app ek constant hai jisme express ki saari powers hai

// // app.get("route " , handler)

// // app.use ke andar middle ware functin lkhna parta hai nhi to node js pahchsan nhi paat ahi ki wo normal fucncntion hai ya middlewae function

// // app.use chalega hi chalega kyuki isse ho ke hi req jata hai baaki sab fucntion me

// // ------>|||app={.use}||||------->|||app={.get}||||------>|||app={.get}|||

// app.use(function (req, res, next) {
//   console.log("hey hello");

//   // ab humlog ko next likhna parega kyuki ye isse aage nhi jaayega req
//   next();
// });
// app.use(function (req, res, next) {
//   console.log("hey hello kaise ho");

//   // ab humlog ko next likhna parega kyuki ye isse aage nhi jaayega req
//   next();
// });

// app.get("/", function (req, res) {
//   ``;
//   res.send("hello world");
// });
// app.get("/about", function (req, res) {
//   ``;
//   res.send("hello about");
// });

// // jo function handler use ho rha hai wo middleware hai

// // get = server se kuch mangwa rhe hai
// // app.all('/*{splat}' , function(req , res){``
// //     res.send("if nothing works i will");
// // })

// // handling nonexistent routes

// app.listen(3000);

// middle wares : ek aisa koi v fucntion jisme aaapko tin chezo ka accsess mile ,( req , res , next)

// jab v aap browser se koi request backend bhjete hai to wo apne route par jaati hai and agar aap chahte hai route par jaane se pahle wo request mein aap kuch check karna chate hai ya kuch jorna chate hai to un saare case me middleware use hota hai





// express session 

// cookie hota hai browser me data save karne ke liye
// aur session hota hai server pe data seve karne ke liye
// cons : agar server reload hua to saara data loose ho jayega



// const express = require('express');
// const app  = express();
// const expressSession = require('express-session');

// app.use(expressSession({
//     secret:"random stuff",
//     resave: false, //kucch v change nhi husa to save nhi karna hai
//     saveUninitialized: false, //use just website pe aaya aur uske niye session nhi crete karna hai
// }))


// app.get('/' , function(req , res , next){
//     res.send("hey");
// })

// app.get("/create" , function(req , res , next){
//     req.session.polo = true;
//     res.send("done");

// })
// app.get("/checks" , function(req , res , next){
//     console.log(req.session.polo)

// })

// app.listen(3000)



// // ek route me data save aur dusre route me data use karne ke liye use hota hai flash

// const express = require('express');
// const app = express();
// const expressSession = require('express-session');
// const flash = require('connect-flash')

// app.use(expressSession({
//     secret:"heeh",
//     resave: false,
//     saveUninitialized:false,
// }));

// app.use(flash())

// app.get('/' , function(req , res , next){
//     req.flash("error" , "invalid credentials")
//     res.redirect("/error")
// })
// app.get('/error' , function(req , res , next){
//     let message = req.flash('error')
//     res.send(message)
// })

// app.listen(3000)



// flash using

// const express = require('express');
// const app = express();
// const expressSession = require('express-session');
// const flash = require('connect-flash');

// app.use(expressSession({
//     secret:"heeehe",
//     resave:false,
//     saveUninitialized:false,

// }))


// app.use(flash())

// // handler
// app.get('/' , function(req , res , next){
//     req.flash("error" , "ye nahi chalega be ");
//     res.redirect('/error')
// })

// app.get('/error' , function(req , res , next){
//     let message = req.flash("error");
//     res.send(message)
// })


// app.listen(3000)



// const express = require('express');
// const app = express();
// const expressSession = require('express-session');
// const flash = require('connect-flash')

// app.use(expressSession({
//     secret:"this is secret",
//     resave:false,
//     saveUninitialized:false,
// }))

// app.use(flash());

// app.get('/' ,  function(req , res , next){
//     req.flash("error" , "ye ek error hai")
    
//     res.redirect("/error")
// })
// app.get('/error' ,  function(req , res , next){
//     let message  = req.flash("error");
//     res.send(message)
// })

// app.listen(3000)





// // CORS (cross origin resourse sharing)
// // browser mein ek security feature hota hai , jiske tahat aap kisi aur web domain ka data namhi manga sakte hai abd browser isse aapko rokta hai  , ab agar aap chahte hai ki browser allow kare data ko laane ke liye , to fir aapko website ke server ke through CORS enable karna hooga

// do diff domain data nhi manga sakte hai

// const express = require('express')
// const app = express()
// const cors = require('cors')

// app.use(cors()) // allow kar rhi hai data shre karne ke liye
// app.get('/' , function(req , res , next){
//     app.send("ho gya ha")
// })

// app.listen(3000)


// agar aaap ko kisi ek route me data share karna hai to jisme karna hai usme sirf cors likhte hai


// const express = require('express')
// const app = express();
// const cors = require('cors')


// app.get('/' , function(req , res , next){
//     app.send("ho gya ha")
// })
// app.get('/shreable' ,cors() , function(req , res , next){
//     app.send("ho gya ha")
// })

// app.listen(3000)




// cookie parser 

// kisi route se kisi route me jaaye to server se kuch karna hai to
// save karne ke liye package nhi chahiye cookie read karne ke liya chaiye package


// const express =require('express');
// const app = express();
// const cookieParser = require('cookie-parser')


// app.use(cookieParser())

// app.get('/' , function(req , res , next){
//     res.send("hey")


// })
// app.get('/check' , function(req , res , next){
//     console.log(req.cookies.name);
//     res.send("checking")


// })

// app.get('/banned' , function(req , res , next){
//     res.cookie("name" , "cikrant") 
//     res.send("banned")


// })

// app.listen(3000)


// // edti this cookie chrome extension




// MORGAN = browser se req bhejenge to uske related information


// const express  =require('express');
// const app = express()
// const morgan = require('morgan');


// app.use(morgan("combined")) ///more options are here
// app.get('/' , function(req , res, next){
//     res.send("hey")

// })

// app.listen(3000)



// reques and resppond==============================

// front end -----(req)----->backend----(res)------>frontend



// const express  = require('express');
// const app = express()


// app.get('/' , function(req , res){
//     console.log(req.ip);
//     //body , cookies , req , query , ip ,header , url ,  method

// })



// // leke jaane wala stuff hoga res se


// app.listen(3000)

// ============================================================

// DYAMIC Routing


// const express = require('express');
// const app = express()

// app.get('/' , function(req , res , next){
//     res.send("some thing about htis page")
// })
// app.get('/about' , function(req , res , next){
//     res.send("some thing about about About htis page")
// })
// app.get('/profile/:username' , function(req , res , next){
//     res.send(req.params.username + 's page')
// })


// app.get('/about/:name/:age' , function(req , res , next){
//     res.send(`your name is ${req.params.name} and age is ${req.params.age}`)
// })

// app.listen(3000)














// ==============server side rendering================

// install ejs from npm : npm i ejs
// app.set("view engine" ,"ejs")
// create view folder
// creae indexedDB.ejs
// load html in ejs page
// use res.render in place f res.send

// const express = require('express');
// const app = express();

// app.set('view engine' , 'ejs')

// app.get('/' , function(req , res){
//     res.render("index")
// })
// // app.get('/profile' , function(req , res){
// //     res.render("profile")
// // })
// app.listen(3000)


// how ejs works

// server dynamic file ka actual static html file bnata hai fir  wo html file browser ko bhejega

// server side rendering



// form handling

// jab v dta url me dikhega iska matlab hai ki method get tha

// form jab bhi submit karoge pahlecheej ye dekhna ki saari fields name property ko name mila h ki nhi
// form ke paas action hai ki nhi
// backend ke paas route hai ki nhi
// wo route ka type sahi hai ki nhi
// route ke andar data uske type ke hisaab se milega 

// GET -req.query 
// POST -req.body

// GET method =========================

// by default method GET hi hota hai

// const express = require('express');
// const app = express();


// app.set('view engine' , 'ejs')
// app.use(express.json());
// app.use(express.urlencoded({extended : true}))

// app.get('/' , function(req , res){
//     res.render("index")
// })
// app.get('/check' , function(req , res){
//     console.log(req.query)
//     res.send("working")
// })
// // app.get('/profile' , function(req , res){
// //     res.render("profile")
// // })
// app.listen(3000)


// POST mthod===========================
// method changes to post in indexedDB.ejs
// isse url me data nhi dikhta hai

// const express = require('express');
// const app = express();


// app.set('view engine' , 'ejs')
// app.use(express.json());
// app.use(express.urlencoded({extended : true}))

// app.get('/' , function(req , res){
//     res.render("index")
// })
// app.post('/create' , function(req , res){
//     // res.send("working")
//     console.log(req.body)
// })


// app.listen(3000)


// post data k samajhne ke liye it will encode and body ke saath chipak ke jayega ab use bahar nikalene ke liye 
// app.use(express.json()); // react angular use karne ke liye
// app.use(express.urlencoded({extended : true})) {saaare forms accept kar rhe hai}
// use hota hai









// API - sirf data dega aur hum use different front end ke through show karenge


// const express = require('express')
// const app = express()


// app.get("/check" , function(req , res , next){
//     res.send("chal rha hai")

// })

// app.listen(3000)


// REQUESt

// GET : server se kuvh lana
// pOSt : sevver par kuch change hoga , is respect me ki kuch change hua hai
// PUT : update karta hai saathe hi pura replace kar det hai
// patch:pura replace nhi karta sirf utna karta hai jitna karna ho


//  const express = require('express')
//  const app = express()


//  app.get("/" , function(req , res , next){
//      try{
//         res.send(chal)
//      }
//      catch(err){
//         next(err)

//      }

//  })
//  app.post("/check" , function(req , res , next){
//      res.send("chal rha hai")

//  })
//  app.patch("/check" , function(req , res , next){
//      res.send("chal rha hai")

//  })
//  app.put("/check" , function(req , res , next){
//      res.send("chal rha hai")

//  })



// // error handler
// app.use((err , req , res , net)=>{
//     res.status(500).send(err.message);

// })

//  app.listen(3000)




// //  APP crash matlab code galata hai
// // reference error matlab galat variable assign ho gya hai