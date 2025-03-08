const lodash = require('lodash');
const path = require('path');
const fs = require('fs');
const http = require('http');
const { promises } = require('dns');
const PORT = 3000;

const name = ["sangam","shubham","sagar","sangram"];
const result = lodash.map(name, (name) => {
    return name.toUpperCase();
});

console.log(result);

console.log("Directory Name",path.dirname(__filename));
console.log("File Name",path.basename(__filename));
console.log("Extension Name",path.extname(__filename));
console.log("Parse Name",path.parse(__filename));

fs.readdir('./',(err,files) => {
    if(err) {
        console.log({status: false, message: err});
    } else {
        console.log({success: true, files: files});
    }
});

// fs.unlink("file.txt",(err) => {
//     if(err) {
//         console.log({status: false, message: err});
//     } else {
//         console.log({success: true, message: "File Deleted"});
//     }
// });


// fs.existsSync("file.txt",(exists) => {
//     if(exists) {
//         console.log("File Exists");
//     } else {
//         console.log("File Not Exists");
//     }
// });

fs.appendFile('file.txt', '\nAppending some text.', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Text appended successfully');
  });

  const server = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('<h1>Hello World</h1>');
    res.end();
  });


  const server2 = http.createServer((req,res) => {
    const url = req.url;
    if(url === "/"){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write('<h1>Hello World</h1>');
        res.end();
    } else if(url === "/about"){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write('<h1>About Page</h1>');
        res.end();
    } else if(url === "/contact"){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write('<h1>Contact Page</h1>');
        res.end();
    }
  });


  server,server2.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })

//callback
function person (name,callback) {
  console.log(`Hello ${name}`);
  callback();
}

function address () {
  console.log(`The Address is India`);
}

person("Sangam",address);


//Promises

function delatfn (time) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Hello World");
    },time);
  });
}

delatfn(2000).then((data) => {
  console.log(data);
});

function divideFn(num1,num) {
  return new Promise((resolve,reject) => {
    if(num === 0){
      reject("Can't Divide by Zero");
    } else {
      resolve(num1/num);
    }
  });
}

divideFn(10,2).then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});



