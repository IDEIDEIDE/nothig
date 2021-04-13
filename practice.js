// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDshETWSFhZaq_I2n_GjpIvvrgM_Tvx32o",
    authDomain: "the-beeeeeter-twitter.firebaseapp.com",
    databaseURL: "https://the-beeeeeter-twitter-default-rtdb.firebaseio.com",
    projectId: "the-beeeeeter-twitter",
    storageBucket: "the-beeeeeter-twitter.appspot.com",
    messagingSenderId: "106980534423",
    appId: "1:106980534423:web:a43cc6294a59ab0d1fe1d2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser(){
    username = document.getElementById("user_name").value
    firebase.database().ref("/").child(username).update({
       purpose: "coolkid700",
       name: "coolkid7000"
    })
}