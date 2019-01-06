var express = require('express')
var bodyParser = require('body-parser')
var logger = require('morgan')
var cors = require('cors')

var app = express()

var admin = require('firebase-admin')

var serviceAccount = require('./filme-db-firebase-adminsdk-38qu3-b8a9aa7ede')

var firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://filme-db.firebaseio.com/'
})

var database = firebaseAdmin.database()


var port = process.env.port || 3000

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(logger('dev'))

app.listen(port, function(){
    console.log('App running on port' + port)
})

app.post('/api/add', function(req, res){
    console.log('It is working')
    var movieDb = database.ref('/movies')
    // Find the movie equal to our name then creates a snapshot with the data found
    //if snapshot returns not null then the movie with that name already exists in our db
    //else we add the movie
    movieDb.orderByChild('name').equalTo(req.body.name).once('value')
        .then(function (snapshot){
            if(snapshot.val() != null){
                res.send('Movie already exists')
            }else{
                movieDb.push({
                    name: req.body.name,
                    year: req.body.year,
                    genre: req.body.genre,
                    director: req.body.director
                })
                .then(function(){
                    res.send('Movie added')
                })
                .catch(function(error)
                {
                    res.send(error)
                })
            }
        })
  })

app.post('/api/update', function(req, res){
    var movieDb = database.ref('/movies/' + req.body.key)

    movieDb.orderByKey().equalTo(req.body.key).once('value')
        .then(function (snapshot){
            console.log(snapshot.val())
            if(snapshot.val() != null){
            movieDb.set({
                name: req.body.name,
                year: req.body.year,
                genre: req.body.genre,
                director: req.body.director
            })
            .then(function(){
                res.send('Data Updated')
            })
            .catch(function(error)
            {
                res.send(error)
            })
        }else{
            res.send('Movie not found')
        }
        })
    
})


app.post('/api/login', function(req, res) {
    admin.auth().getUserByEmail(req.body.email)
        .then(function(userRecord){
            console.log(userRecord.toJSON())
            if(userRecord.toJSON().providerId == req.body.password){
                res.send('match')
            }else{
                res.send('not match')
            }
        })
        .catch(function(error){
            console.log('Error in fetching user data')
        })
})

app.post('/api/signup', function(req, res) {
    admin.auth().createUser({
        email: req.body.email,
        password: req.body.password
    })
        .then(function(){
            res.send('1')
        })
        .catch(function(error){
            console.log(error)
            res.send('0')
        })
})