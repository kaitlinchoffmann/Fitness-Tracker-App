const express = require('express');
const path = require('path');

const profile = require('./models/profile');
const userController = require('./controllers/user');

const app = express();
const port = 3000;

//CORS middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); //update to accept only from domain expected request is coming from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

//authentication
app.use(function(req, res, next) {
  const arr = (req.headers.authorization || "").split(" ");
  if(arr.length > 1 && arr[1] != null){
      req.userID = +arr[1];
  }
  next();
});

// app.use(function(req, res, next) {
//   const arr = (req.headers.authorization || "").split(" ");
//   if(arr.length > 1 && arr[1] != null){
//       req.userId = +arr[1];
//   }
//   next();
// });

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Headers, Authorization");
//   next();
// });

app
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(express.static( __dirname + '/../client/dist'))
    .get('/', (req, res) => res.send('Welcome to Healthy Habits'))
    .use('/user', userController)  
    
    // .use((req, res) => {
    //   const homepath = path.join(__dirname, '/../client/dist/index.html');
    //   res.sendFile(homepath);
    // })

    .use((err, req, res, next) => {
      console.error(err);
      const errorCode = err.code || 500;
      res.status(errorCode).send({message: err.message});
    })
   
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

