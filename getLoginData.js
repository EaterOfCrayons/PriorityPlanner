var lbl = document.getElementById("temp")
var usernameInput = document.getElementById("username")
var passwordInput = document.getElementById("password")


function getInfo(){
    lbl.textContent = usernameInput.value + " " + passwordInput.value;
}

function convertToJson(){
    var json = {
        "name":usernameInput.value,
        "password":passwordInput.value
    }
    return JSON.stringify(json)

}