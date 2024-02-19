var lbl = document.getElementById("temp")
var usernameInput = document.getElementById("username")
var passwordInput = document.getElementById("password")


function convertToJson(){

    var json = {
        "name":usernameInput.value,
        "password":passwordInput.value
    }
    return postData("http://127.0.0.1:5000/", json)
    
}

async function postData(url, data){
    try{
        const response = await fetch(url, {
            method:"POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(data),
        });
    

    if(response.ok){
        const result = await response.json();
        console.log("Response from server: ", result)
    }
    else{
        console.error("Error: ", response.statusText)
    }

    } catch(error){
        console.error("An error occured: ", error)
    }
}