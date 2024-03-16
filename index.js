const express = require("express");

var app = express();

app.get("/",(req,res) => {
     res.send("Home page");
})

app.get("/about", (req,res) => {
    res.send(`Hi ${req.query.name ? req.query.name : 'Fella' }` + " welcom to our site")
})


// const myServer = http.createServer((req,res) => {
//     if(req.url === '/favicon.ico') return res.end();
//     const log = `${Date.now()} : ${req.url} New Request Recieved\n`;
//     const myurl = url.parse(req.url, true);
//     console.log(myurl);
//     fs.appendFile('log.txt', log, (err) => {
//         if (err) throw err;
//        switch (myurl.pathname){
//             case "/":
//                 res.end("Home page pe aapka swagat hai");
//                 break;
//             case "/about":
//                 const qp = myurl.query;
//                 res.end(`HI ${qp.name ? qp.name : 'Fellanpm '}`);
//                 break;
//             default :
//             res.end("404");
//        }
//       });
    
// })

app.listen(8000, () => {console.log("dekha server start ho gaya")});
