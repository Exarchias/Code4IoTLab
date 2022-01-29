require('dotenv').config();
const path = require('path');
const admin=require('firebase-admin');

const express = require('express');
const app = express();
const { router: measurementsRouter } = require('./api/routes/measurements.routes');
//Firebase stuff
var serviceAccount = require('./admin.json');
admin.initializeApp({
credential: admin.credential.cert(serviceAccount),
databaseURL: "https://fir-37e91-default-rtdb.europe-west1.firebasedatabase.app",
authDomain: "fir-37e91.firebaseapp.com",
});
var db=admin.database();
var dataRef=db.ref("sdata");
var sdata; //here is the data stored when received.
var sdata2; //for filtering

//rest of the code
app.use(express.static(path.resolve(__dirname, 'dist')));

const { connectToDatabase } = require('./database');

app.get("/", (_, res) => {
    res.sendFile("index.html");
});

//go to this link to fetch the data
app.get('/fetch', (req, res) => {
    if(sdata != null){
        //res.send(JSON.stringify(sdata));
        //sdata2 = findTheRoll(sdata, '123');
        sdata2 = sdata.sdata.data;
        res.send(sdata2);
      console.log("sdata2: " + JSON.stringify(sdata));
    } else {
        res.send("{}");
    }
})

app.use(measurementsRouter);

connectToDatabase()
    .then(() => {
        const PORT = process.env.PORT || 8080;
        app.listen(PORT, () => {
            console.log('Listening to port ' + PORT);
        });
    })
    .catch((error) => console.error(error));


//Fetching data! fetching a json object from the database
function getData(){
    dataRef.once('value',function(snap) {
      snap.val();
      sdata = {"sdata":snap.val()};
      console.log(JSON.stringify(sdata));
      })
      //sdata2 = findTheRoll(sdata, '123');
      //sdata2 = sdata["sdata"];
      //console.log("sdata2: " + JSON.stringify(sdata2));
  }

  //finding the freaking element
  function findTheRoll(obj, theroll){
    let result = '';
    //var collection = JSON.parse(obj);
    for (let i in obj) {
      if(i.roll == theroll){
          result = collection[i];
      }
    } 
    return result;
  }

  function intervalFunc() {
      getData();
  }
  
  setInterval(intervalFunc, 1500);
  
