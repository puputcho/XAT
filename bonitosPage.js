const firebaseConfig = {
  apiKey: "AIzaSyC7_1OslKddd25033CM98LA7pIvHFMahxQ",
  authDomain: "xatcom-e1b79.firebaseapp.com",
  databaseURL: "https://xatcom-e1b79-default-rtdb.firebaseio.com",
  projectId: "xatcom-e1b79",
  storageBucket: "xatcom-e1b79.appspot.com",
  messagingSenderId: "141497563702",
  appId: "1:141497563702:web:43d9f89a465e5840e47697",
  measurementId: "G-SMH5YSTNX0"
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
msgWithTag = "<h4 class ='message_h4'>" + message + '</h4><hr>';
row = nameWithTag + msgWithTag;
document.getElementById('output').innerHTML += row;
} }); }); }
getData();
function logout() {
    localStorage.removeItem('userName');
    localStorage.removeItem('roomName');
    window.location =  'index.html';
} 


