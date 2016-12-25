//import express from 'express'
var express = require('express')
var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');
var config = require('./config.js');
var fs = require('fs');

var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

function getUserData() {
  let content = fs.readFileSync('./users.json');
  return JSON.parse(content);
}

function getProjectData(){

    let content = fs.readFileSync('./projects.json');
    return JSON.parse(content);
}


app.get('/getProjects', function (req, res) {
  let projects = getProjectData();

    res.send(projects);
})

app.get('/getUsers', function (req, res) {
  let users = getUserData();

  res.send(users)
})

app.get('/getProjectDetail/:id', function(req,res){

  console.log(req.params);

  let projects = getProjectData();
  projects.map(function(project){
    if(project.id == req.params.id){
      res.send(project);
    }
  })


})


app.get('/getUser/:id', function(req,res){

  console.log(req.params);

  let users = getUserData();
  users.map(function(user){
    if(user.id == req.params.id){
      res.send(user);
    }
  })


})



  app.post('/validateToken', function(req, res){

    jwt.verify(req.body.token, config.secret, function(err, decoded) {
      if(err){
        res.status(200).send({
          statusCode : 400,
          error: err,
          data: null
        })
      } else {
        console.log(decoded.data);

        if(typeof decoded.data != undefined && decoded.data != null){
          res.send({
            statusCode : 200,
            error: null,
            data: 'user is authenticated'
          })

          }
      }
});
    //res.send('Hello, boy');
  })

  app.post('/login', function(req, res){

    let users = getUserData();
    users.map(function(userdata){
      if(userdata.user == req.body.user && userdata.password === req.body.password)
      {
        jwt.sign({
          data: req.body.user
        }, config.secret, {expiresIn : '1h'});


        res.send({
          'statusCode':200,
          'data': {
            'token' :
                  jwt.sign({
                    data: userdata
                  }, config.secret, {expiresIn : '1h'}),
            'status': 'success'
          },
          'error': null
        })
      }
    })

      res.send({
        'statusCode':400,
        'data': null,
        'error': 'Invalid Credentials'
      })


  })

  app.get('/logout', function(req,res){

  })


  app.listen(8000, function(){
    console.log('Listening 8000');
  })
