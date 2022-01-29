const express = require('express')
const admin=require('firebase-admin'); //For firebase
const app = express()
const port = 3000

// ============= Code for firebase STARTS here ===============================
var serviceAccount = require('./admin.json'); //don't forget to always have the admin.json key file in the correct place
admin.initializeApp({
credential: admin.credential.cert(serviceAccount),
databaseURL: "https://fir-37e91-default-rtdb.europe-west1.firebasedatabase.app",
authDomain: "fir-37e91.firebaseapp.com",
});
var db=admin.database();
//var userRef=db.ref("users"); //that was from the example
var dataRef=db.ref("sdata"); //we are using that
var receiveddata; //here is the data stored when received.
// ============= Code for firebase ENDS here ===============================


//=============== ROUTES ==========================================
//just a homepage
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

//go to this link to send the data
app.get('/send', (req, res) => {
  let user = JSON.parse('{"name":"Tester32", "email":"yolo@yolo", "roll":"data"}')
  addData(user)
  res.send('sending the data. check the console')
})

//go to this link to fetch the data
app.get('/fetch', (req, res) => {
  getData();
  res.send('fetching the data. check the console')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//============ FIREBASE FUNCTIONS ======================================

//Sending data! Adding a json object to the database
function addData(obj){
  var oneData=dataRef.child(obj.roll);
  oneData.update(obj,(err)=>{
  if(err){
    console.log("Something went wrong" + err)
  //res2.status(300).json({"msg":"Something went wrong","error":err});
  }
  else{
  //res2.status(200).json({"msg":"user created sucessfully"});
  console.log("Data was sucessfully sent")
  }
  }) }


//Fetching data! fetching a json object from the database
function getData(){
  dataRef.once('value',function(snap) {
    snap.val();
    receiveddata = {"sdata":snap.val()};
    console.log(JSON.stringify(receiveddata));
    })
}