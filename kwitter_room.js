function logout() {
    localStorage.removeItem('username')
    window.location = 'index.html'
}
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
