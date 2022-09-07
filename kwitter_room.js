function logout() {
    localStorage.removeItem('username')
    window.location = 'index.html'
}
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
nome = localStorage.getItem('username');
document.getElementById('username').innerHTML = 'Olá, '+nome+', bora usar o xat?';
function addRoom() {
  newRoom = document.getElementById('roomName').value;
  console.log(newRoom);

  firebase.database().ref("/").child(newRoom).update({
    purpose : "adicionar sala"
  });
  localStorage.setItem("roomName", newRoom);
   window.location ='kwitterPage.html';
}
function getData() {  firebase.database().ref("/").on('value', function(snapshot) 
{ document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
    { childKey  = childSnapshot.key;
roomNames = childKey;
console.log("Nome da Sala - " + roomNames);
row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
document.getElementById("output").innerHTML += row;
});
});

}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem('roomName', name);
window.location ='kwitterPage.html';
}