const firebaseConfig = {
    apiKey: "AIzaSyANz6peKcOIHXKRH_aZp9kxQ2upEHYGXkw",
    authDomain: "login-e4389.firebaseapp.com",
    projectId: "login-e4389",
    databaseURL: "https://login-e4389-default-rtdb.firebaseio.com",
    storageBucket: "login-e4389.appspot.com",
    messagingSenderId: "643917254218",
    appId: "1:643917254218:web:11b6ea9a5aa5766b73a0b3"
};

const app = firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref();

const detailsRef = dbRef.child('userdetails');
detailsRef.on("child_added", function(snapshot, prevChildKey){
    var newPost = snapshot.val();
});

function send(){
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    detailsRef.push().set({
        email: email,
        username: username,
        password: password,
    });
}