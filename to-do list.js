var firebaseConfig = {
    apiKey: "AIzaSyC388e22vfczGYLRgXGHD8k2ob73X6ZFqk",
    authDomain: "sample3-bfc03.firebaseapp.com",
    databaseURL: "https://sample3-bfc03-default-rtdb.firebaseio.com",
    projectId: "sample3-bfc03",
    storageBucket: "sample3-bfc03.appspot.com",
    messagingSenderId: "206423500721",
    appId: "1:206423500721:web:15345837e982a159b97f90",
    measurementId: "G-ZWEVH3MRX9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);















var storage = document.getElementById("storage");
var input = document.getElementById("input");
var button = document.getElementById("btn");
button.addEventListener("click", function() {
    var item = document.createElement("li");
    item.innerHTML = input.value;
    firebase.database().ref('works').push({
        work: document.getElementById('input').value
    });
    storage.appendChild(item);
    input.value = "";
    item.addEventListener("click", function() {
        item.style.textDecoration = "line-through";
        item.style.backgroundColor = 'chartreuse';
    });
    item.addEventListener("dblclick", function() {
        storage.removeChild(item); // to remove item from user interface
        firebase.database().ref('works').remove(); // to remove item from database
    })

});