const fs = require("fs");
const path = require("path");

//initialize the foldername
const folderName = "frontend-scaffold";

// Create the main folder
fs.mkdirSync(folderName);

// Create index.html file and fill it with content
const htmlFilecontent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <title>Document</title>
</head>
<body>
    <h1>Welcome</h1>
    <script src="./js/script.js"></script>
</body>
</html>`;
fs.writeFileSync('/frontemd-scaffold/index.html', htmlFilecontent, (err) => { 
if(err) { 
throw err; 
}); 

// Create "css" folder 
const cssFolder = "folderCss";
fs.mkdirSync(cssFolder);

//create "style.css" file and write inside

const cssFilecontent = `h1 {
    text-align: center;
}`;

fs.writeFileSync("/frontend-scaffold/cssFolder/style.css", cssFilecontent);

// Create "js" folder and "script.js" file another way to create folder and file but add const path = require('path');

const jsFolder = path.join(folderName, "js");
fs.mkdirSync(jsFolder);
const jsFilecontent = `alert("Welcome");`;

fs.writeFileSync(path.join(jsFolder, "script.js"), jsFilecontent);

// Create "images" folder
fs.mkdirSync(path.join(folderName, "images"));

console.log("Frontend scaffold created successfully!");
