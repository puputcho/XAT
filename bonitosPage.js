const firebaseConfig = {
    apiKey: "AIzaSyCPmFMRsK2OmOAVecO2BTfI0srhKZhzNJw",
    authDomain: "xat-1e828.firebaseapp.com",
    databaseURL: "https://xat-1e828-default-rtdb.firebaseio.com",
    projectId: "xat-1e828",
    storageBucket: "xat-1e828.appspot.com",
    messagingSenderId: "1000654827269",
    appId: "1:1000654827269:web:8b5aff0e1314c4e918d16c",
    measurementId: "G-TFP9EVMBQ2"
  };
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem('username');
roomName = localStorage.getItem('roomName');
// document.getElementById('title').innerHTML = 'XAT - #' + roomName;

function send() {
    msg = document.getElementById('msg').value;
    firebase.database().ref(roomName).push({
        name: username,
        message: msg,
    });
    document.getElementById('msg').value = '';
}
function getData() { firebase.database().ref("/" + roomName).on('value', function (snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") { firebaseMessageId = childKey; messageData = childData; 
console.log(firebaseMessageId);
console.log(messageData);
name = messageData['name'];
message = messageData['message'];
nameWithTag = '<h4>' + name + "<img class='user_tick' src='tick.png'></h4>";
msgWithTag = "<h4 class ='message_h4'>" + message + '</h4>';
row = nameWithTag + msgWithTag;
document.getElementById('output').innerHTML += row;
} }); }); }
getData();
function logout() {
    localStorage.removeItem('userName');
    localStorage.removeItem('roomName');
    window.location =  'index.html';
} 


