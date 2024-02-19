let classes = [];
let grade = [];
    function changeText() {
        var txt = document.getElementById('classInput').value;
        var grd = document.getElementById('gradeInput').value;

        if (txt.trim() === '' || grd.trim() === '') {
            alert("Please enter both class and grade.");
            return false;
        }

        classes.push(txt);
        grade.push(grd);

        if (document.getElementById('classInput').value != null || document.getElementById('gradeInput').value != null) {
            document.getElementById("classLabel").innerHTML += ("<br>" + txt + ", " + grd);

}

    document.getElementById('classInput').value = "";
    document.getElementById('gradeInput').value = "";

    return false;
}