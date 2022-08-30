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