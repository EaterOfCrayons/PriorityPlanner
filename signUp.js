var usernameInput = document.getElementById("usernameR");
var passwordInput = document.getElementById("passwordR");



function createAccount(){
    store.addUser(new User(usernameInput.value, passwordInput.value))
    document.getElementById("outputLabelR").textContent = "SUCCESS"
    window.location.href = "addclass.html"
}