import firebase from "firebase";
//Authentication
import "firebase/auth";

//realtime database
import "firebase/database";

//Storage can store images , videos , ....
import "firebase/storage";


var firebaseConfig = {
  apiKey: "AIzaSyDnJlPIrmSvfyieQc8MhDEfiJ-H9mDaydc",
  authDomain: "covidtracker-7db8c.firebaseapp.com",
  projectId: "covidtracker-7db8c",
  databaseURL : "https://covidtracker-7db8c-default-rtdb.firebaseio.com",
  storageBucket: "covidtracker-7db8c.appspot.com",
  messagingSenderId: "446661485406",
  appId: "1:446661485406:web:9f7d527d72c9928eeb25cf"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
