'use strict'

// Express App (Routes)
const express = require("express");
const app     = express();
const path    = require("path");
const fileUpload = require('express-fileupload');

app.use(express.static('public'));

// Minimization
const fs = require('fs');
const JavaScriptObfuscator = require('javascript-obfuscator');

// Important, pass in port as in `npm run dev 1234`, do not change
let portNum = process.env.PORT;
if(portNum == null || portNum == ""){
    portNum = process.argv[2];
}

// Send HTML at root, do not change
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
});
app.get('/album',function(req,res){
  res.sendFile(path.join(__dirname+'/public/album.html'));
});
app.get('/artist',function(req,res){
  res.sendFile(path.join(__dirname+'/public/artist.html'));
});
app.get('/view_album',function(req,res){
  res.sendFile(path.join(__dirname+'/public/view_album.html'));
});
app.get('/view_artist',function(req,res){
  res.sendFile(path.join(__dirname+'/public/view_artist.html'));
});

// Send Style, do not change
app.get('/style.css',function(req,res){
  res.sendFile(path.join(__dirname+'/public/style/style.css'));
});
app.get('/index.css',function(req,res){
  res.sendFile(path.join(__dirname+'/public/style/index.css'));
});
app.get('/album.css',function(req,res){
  res.sendFile(path.join(__dirname+'/public/style/album.css'));
});
app.get('/artist.css',function(req,res){
  res.sendFile(path.join(__dirname+'/public/style/artist.css'));
});
app.get('/view_album.css',function(req,res){
  res.sendFile(path.join(__dirname+'/public/style/view_album.css'));
});
app.get('/view_artist.css',function(req,res){
  res.sendFile(path.join(__dirname+'/public/style/view_artist.css'));
});

// Send obfuscated JS, do not change
app.get('/index.js',function(req,res){
  fs.readFile(path.join(__dirname+'/public/script/index.js'), 'utf8', function(err, contents) {
    const minimizedContents = JavaScriptObfuscator.obfuscate(contents, {compact: true, controlFlowFlattening: true});
    res.contentType('application/javascript');
    res.send(minimizedContents._obfuscatedCode);
  });
});
app.get('/album.js',function(req,res){
  fs.readFile(path.join(__dirname+'/public/script/album.js'), 'utf8', function(err, contents) {
    const minimizedContents = JavaScriptObfuscator.obfuscate(contents, {compact: true, controlFlowFlattening: true});
    res.contentType('application/javascript');
    res.send(minimizedContents._obfuscatedCode);
  });
});
app.get('/artist.js',function(req,res){
  fs.readFile(path.join(__dirname+'/public/script/artist.js'), 'utf8', function(err, contents) {
    const minimizedContents = JavaScriptObfuscator.obfuscate(contents, {compact: true, controlFlowFlattening: true});
    res.contentType('application/javascript');
    res.send(minimizedContents._obfuscatedCode);
  });
});
app.get('/view_album.js',function(req,res){
  fs.readFile(path.join(__dirname+'/public/script/view_album.js'), 'utf8', function(err, contents) {
    const minimizedContents = JavaScriptObfuscator.obfuscate(contents, {compact: true, controlFlowFlattening: true});
    res.contentType('application/javascript');
    res.send(minimizedContents._obfuscatedCode);
  });
});
app.get('/view_artist.js',function(req,res){
  fs.readFile(path.join(__dirname+'/public/script/view_artist.js'), 'utf8', function(err, contents) {
    const minimizedContents = JavaScriptObfuscator.obfuscate(contents, {compact: true, controlFlowFlattening: true});
    res.contentType('application/javascript');
    res.send(minimizedContents._obfuscatedCode);
  });
});
app.get('/additional_funcs.js',function(req,res){
  fs.readFile(path.join(__dirname+'/public/script/additional_funcs.js'), 'utf8', function(err, contents) {
    const minimizedContents = JavaScriptObfuscator.obfuscate(contents, {compact: true, controlFlowFlattening: true});
    res.contentType('application/javascript');
    res.send(minimizedContents._obfuscatedCode);
  });
});

//Respond to POST requests that upload files to uploads/ directory
app.post('/upload', function(req, res) {

  if(!req.files) {
    return res.status(400).send('No files were uploaded.');
  }
 
  let uploadFile = req.files.uploadFile;
 
  // Use the mv() method to place the file somewhere on your server
  uploadFile.mv('uploads/' + uploadFile.name, function(err) {
    if(err) {
      return res.status(500).send(err);
    }

    res.redirect('/');
  });
});

//Respond to GET requests for files in the uploads/ directory
app.get('/uploads/:name', function(req , res){
  fs.stat('uploads/' + req.params.name, function(err, stat) {
    console.log(err);
    if(err == null) {
      console.log("ASSET PATH:");
      console.log(__dirname+'/uploads/' + req.params.name);
      res.sendFile(path.join(__dirname+'/uploads/' + req.params.name));
    } else {
      res.send('');
    }
  });
});

//Respond to GET requests for files in the uploads/ directory
app.get('/assets/:name', function(req , res){
  fs.stat('public/assets/' + req.params.name, function(err, stat) {
    console.log(err);
    if(err == null) {
      res.sendFile(path.join(__dirname+'/public/assets/' + req.params.name));
    } else {
      res.send('');
    }
  });
});
//******************** Your code goes here ******************** 
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "mysql.jordanevans.me",
  user: "jevsadmin",
  password: "Harley0727",
  database: "jevs_music_db"
});

//Initiate connection
con.connect(err => {
  if (err) {
    console.error('An error occurred while connecting to the DB');
    throw err;
  }
});


// Gif retreival endpoint
app.get('/getGifList', function(req , res){
  console.log("\n/getGifList endpoint called.");
  let db_query = "SELECT * FROM GIF_LIST ORDER BY RAND()";
  con.query(db_query, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});


// getRecentAlbumsList endpoint
app.get('/getRecentAlbumsList', function(req , res){
  console.log("\n/getRecentAlbumsList endpoint called.");
  let db_query = "SELECT * FROM ALBUM INNER JOIN ARTIST ON ALBUM.artist_id=ARTIST.id ORDER BY release_date DESC LIMIT 10";
  con.query(db_query, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

// getMyList endpoint
app.get('/getMyList', function(req , res){
  console.log("\n/getMyList endpoint called.");
  let db_query = "SELECT * FROM MY_LIST INNER JOIN ALBUM ON MY_LIST.album_id=ALBUM.id INNER JOIN ARTIST ON ALBUM.artist_id=ARTIST.id ORDER BY MY_LIST.id DESC LIMIT 10";
  con.query(db_query, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

// getTopAlbums endpoint
app.get('/getTopAlbumsList', function(req , res){
  console.log("\n/getTopAlbumsList endpoint called.");
  let db_query = "SELECT * FROM ALBUM INNER JOIN ARTIST ON ALBUM.artist_id=ARTIST.id ORDER BY ALBUM.rating DESC LIMIT 10";
  con.query(db_query, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

// getTopArtistsList endpoint
app.get('/getTopArtistsList', function(req , res){
  console.log("\n/getTopArtistsList endpoint called.");
  let db_query = "SELECT * FROM ARTIST ORDER BY rating DESC LIMIT 10";
  con.query(db_query, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});


// ALBUM PAGE ENDPOINTS

// /getAlbumPageContent endpoint
app.get('/getAlbumPageContent', function(req , res){
  console.log("\n/getAlbumPageContent endpoint called.");
  console.log(req.query.q);
  con.query(req.query.q, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});



// ARTIST PAGE ENDPOINTS

// /getAllGenres endpoint
app.get('/getAllGenres', function(req , res){
  console.log("\n/getAllGenres endpoint called.");
  let query = "SELECT * FROM GENRE";
  con.query(query, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});
// /getArtistPageContent
app.get('/getArtistPageContent', function(req , res){
  console.log("\n/getArtistPageContent endpoint called.");
  console.log(req.query.q);
  con.query(req.query.q, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});


// VIEW ALBUM ENDPOINTS

// /getAlbumFromDb endpoint
app.get('/getAlbumFromDb', function(req , res){
  console.log("\n/getAlbumFromDb endpoint called.");
  let db_query = "SELECT * FROM ALBUM WHERE title='"+req.query.title+"'";
  console.log(db_query);
  con.query(db_query, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});


// VIEW ARTIST ENDPOINTS

// /getArtistFromDb endpoint
app.get('/getArtistFromDb', function(req , res){
  console.log("\n/getArtistFromDb endpoint called.");
  let db_query = "SELECT * FROM ARTIST WHERE name='"+req.query.name+"'";
  console.log(db_query);
  con.query(db_query, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});
// /getArtistAlbumsFromDb endpoint
app.get('/getArtistAlbumsFromDb', function(req , res){
  console.log("\n/getArtistAlbumsFromDb endpoint called.");
  let db_query = "SELECT * FROM ALBUM WHERE artist_id="+req.query.artist_id+" ORDER BY release_date DESC";
  console.log(db_query);
  con.query(db_query, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});
app.listen(portNum);
console.log('Running app at PORT: ' + portNum);
