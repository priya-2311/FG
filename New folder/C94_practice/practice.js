var firebaseConfig = {
    apiKey: "AIzaSyAx2EYXTT0MEKqutQSQoMFvOSp9GpCAjOM",
    authDomain: "kwitter-36581.firebaseapp.com",
    databaseURL: "https://kwitter-36581-default-rtdb.firebaseio.com",
    projectId: "kwitter-36581",
    storageBucket: "kwitter-36581.appspot.com",
    messagingSenderId: "738895909463",
    appId: "1:738895909463:web:c455ed72c02d4134944912",
    measurementId: "G-2KBHDEY8RD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 function adduser(){
     username=document.getElementById("username").value;
     firebase.database().ref("/").child (username).update({purpose : "Hi I am shiviani"}) ;
 }