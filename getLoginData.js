var lbl = document.getElementById("temp")
var usernameInput = document.getElementById("username")
var passwordInput = document.getElementById("password")


function convertToJson(){
    console.log("teneitneitne")
    var json = {
        "name":usernameInput.value,
        "password":passwordInput.value
    }
    
    fetch("http://127.0.0.1:5000/api/student/login", {
    method: "POST",
    body: JSON.stringify(json),
    headers: {
        "accept": "application/json"
    }
    })
    .then(response => response.json())
    .then(data => console.log(data));
}