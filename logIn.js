

currentUser = 0;

function login(){
    var usernameInput = String(document.getElementById("username").value)
    var passwordInput = String(document.getElementById("password").value)
    currentUser = store.findUser(usernameInput);
    if (currentUser == null){
        document.getElementById("outputLabel").textContent = "USER NOT FOUND"
        return;
    }

    if (!currentUser.login(passwordInput)){
        document.getElementById("outputLabel").textContent = "WRONG PASSWORD"
        return;
    }
    document.getElementById("outputLabel").textContent = "SUCCESS"

    if (document.getElementById("outputLabel").textContent == "SUCCESS") {
        window.location.href = "addclass.html";
    }

    usernameInput.textContent = ""
    passwordInput.textContent = ""

}