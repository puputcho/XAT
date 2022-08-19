function addUser() {
    username = document.getElementById('username').value
    localStorage.setItem('username', username);
    window.location.assign("https://puputcho.github.io/XAT/Kwitter_room.html")
}