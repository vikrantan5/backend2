


// get use hota hai server se kuch magane k  liye

// get deta hai humesha(route , handler {handler humesha function hota hai})

// import express from 'express'
// const app = express();
//  import expressSession from 'express-session'
//  import flash from 'connect-flash'
//  import cookieParser from 'cookie-parser'
//  import morgan from 'morgan'
//  import cors from 'cors'
// app.use(expressSession({
//     secret:"kuch v",
//     resave:false,
//     saveUninitialized: false
// }))


// get me aap kah rhe hai ki browser se kuch leke aao

// jo under funcction hai wo request handler hai aur middle ware function hai


// app.use(expressSession({
//     resave:false,
//     saveUninitialized: false,
//     secret: "main nhi manta"
// }))

// app.use(flash());
// app.use(cookieParser());
// app.use(morgan('combined'));

// app.use(cors()); is route ka data savi ko shre karne k liye



// app.use((req , res , next)=>{
//     console.log('Middleware function');
//     next();
// })

//  app.get('/' , function(req , res , next){
//     // console.log(req.params);
//     // console.log(req.cookies);
//     // console.log(req.query);
//     // console.log(req.ip);
//     // console.log(req.headers);
//     // console.log(req.url);
//     // console.log(req.method);
//     res.send("hey")
//  })


//  app.get('/about/:username/:age' , function(req , res){
//     res.send(`somethimg about ${req.params.username} page who is ${req.params.age}`);
//  })


// app.get("/shareable" , cors() , function(req , res , next){
//     res.send("hey");
// })

// app.get("/check" ,function(req , res , next){
//     console.log(req.cookies.name);
//     res.send("checking")
// })
//  app.get("/banned" , function(req , res , next){
//      res.cookie("name"  ,"vikrant");
//      res.send("banned")
//  })



// app.get("/error"  ,function(req ,  res , next){
//     let message = req.flash('error')
//     res.send(message)
// })

// app.get('/vik', function(req , res){
//     req.session.polo  = true;
//     res.send("done ho gya");
// })

// app.listen(3000)



// aisa koi v function jisme in 3 chizo ka access mile req , res , next use middleware  kahte hai

// jab v browser se koi req backend pe bhejte hai to wo apne route pe jati hai and agar aap chate hai route pe jane se pahle aap check karna chate haia ya fir jorna chate hai to usme middleware use hota hai



// middleware express-session
// cookie hota hai browser me data save karne k liye
// and session hota hai server pe data send karne k liye
// lekin agar server refresh hua to hum sara data loose kar denge



// browsers me securityfeatures hota hai   , jiske tahat app kisi aur web domain ka data nahi manga sakte ya show nhi kar skte and browser ise rokta hai aur ab app agar chhahte hai ki browser allow kare data ke liye to fir us website ke server k though CORS enable karna parega 




// morgan kisi v route ke information show karta hai/



// GET - ka matlab hota hai server se kuch lana

// POST- server pe kuch chnege hoga is aspect me ki kuch create hoga , ye fir establish hoga


// PUT- update karne k iye ,poora replace karta hai

// PATCH- sirf wo chnage karta hai jo change hua hai


















import express from 'express'
const app = express();
app.set('view engine' , 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}))//forms support kar pa rhe hai

 var data= [1,2,3,4,5]
// app.get('/' , function(req , res ,next){
    //     res.send("hey");
    app.get('/', function(req, res){
        res.send("hey")
    })
     app.get('/profile', function(req, res){
         res.send(data)
     })
   
   
// })
// app.get('/hey' , function(req , res ,next){
//     try{
//         res.send("hey");
//     }
//     catch(err){
//         next(err);
//     }
// })

// app.use((err , req , res  ,next)=>{
//     res.status(500).send(err.message)
// })
// app.post('/create' , function(req , res){
//     console.log(req.body); //only work if upar wo do lines likha ho .......

// })
// app.get('/check' , function(req , res){
//     res.send("working");
// })
// app.post('/check' , function(req , res){
//     res.send("working");
// })
// app.put('/check' , function(req , res){
//     res.send("working");
// })
// app.patch('/check' , function(req , res){
//     res.send("working");
// })
// app.delete('/check' , function(req , res){
//     res.send("working");
// })


// app.get('/users/:id', (req,res)=>{
//     const userid = req.params.id;
//     res.send(`UserID:${userid}`);
// })


// post data  ko samajhne k liye aur encoded hoga aur chipak k  jayega body se

// app.get('/check' , function(req , res){
//     res.send(req.query.name + req.params.email)
//     res.send("working")
//     console.log(req.query)
// })



// form jab v submit karoge pahle ye chheej dekho ki saari fields ke paas name property hai ya nhi for k pass action hai ya nhi
// backend k pass route hai ya nhi
// wo route ka type sahi hai ya nhi
// route k andar data unke type k hisaab se data milega
// GET- req.query
// POST - req.body


// get type ke form ka data hi url me dikhta hai
// app.get('/profile' , function(req , res){
//     res.render("profile");
// })

app.listen(3000);