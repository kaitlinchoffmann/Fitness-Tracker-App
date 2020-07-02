const express = require('express');
const mongoose = require("mongoose");
const path = require('path');

const userController = require('./controllers/user');
const driController = require('./controllers/dri');
const exController = require('./controllers/exercise');
const foodController = require('./controllers/food');
const updateController = require('./controllers/update');
const friendController = require('./controllers/friend');

const app = express();
const port = process.env.PORT || 3000;
 
//need to create an envrionment variable with: export DATABASEURL=<url to database>
// to check if worked:  
// console.log(process.env.DATABASEURL);
mongoose.connect(process.env.DATABASEURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log("Healthy Habits Database Connected!"))
    .catch(error => console.log(error));

//CORS middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); //update to accept only from domain expected request is coming from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");  
  next();
});

//authentication
app.use(function(req, res, next) {
  const arr = (req.headers.authorization || "").split(" ");
  if(arr.length > 1 && arr[1] != null){
      // req.userID = +arr[1];
      req.userID = arr[1];
  }
  next();
});

app
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(express.static(path.join(__dirname, '../dist')))
    // .use('/', express.static(path.join( __dirname , 'dist')))
    .use('/user', userController)  
    .use('/dri', driController)
    .use('/exercise', exController)
    .use('/food', foodController)
    .use('/update', updateController)
    .use('/friend', friendController)
    
    .get('*', function (req, res) {
      res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
      // const homepath = path.join(__dirname, '/../dist/index.html');
      // res.sendFile(homepath);
      //trying to get heroku to show changes!!!
    })

    .use((err, req, res, next) => {
      console.error(err);
      const errorCode = err.code || 500;
      res.status(errorCode).send({message: err.message});
    })
   
app.listen(port, () => console.log(`Server has started at ${port}`));
// app.listen(process.env.PORT, process.env.IP);