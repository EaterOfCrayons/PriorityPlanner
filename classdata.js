let classes = [];
    function changeText() {
        var txt = document.getElementById('classInput').value;
        classes.push(txt);
        document.getElementById("classLabel").innerHTML += (" " + txt);
        for (let i = 0; i < classes.length; i++) {
            console.log(classes[i]);
}

    document.getElementById('classInput').value = "";

    return false;
}

function nextPage() {

}