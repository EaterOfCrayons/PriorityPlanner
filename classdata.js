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

let assignmentList = [];
let duedateList = [];
let subjectList = [];

function addAssignment() {
    var assignment = document.getElementById('assignmentInput').value;
    var duedate = document.getElementById('duedate').value;
    var subject = document.getElementById('subject').value;

    if (assignment.trim() === '' || duedate.trim() === '' || subject.trim() === '') {
        alert("Please fill out all fields");
        return false;
    }

    assignmentList.push(assignment);
    duedateList.push(duedate);
    subjectList.push(subject);

    document.getElementById('assignmentInput').value = "";
    document.getElementById('duedate').value = "";
    document.getElementById('subject').value = "";

    console.log(assignment + duedate + subject);
}


function addToTable() {
    var priority = document.getElementById('priority').value; //replace these with the input from ishans code
    var assignment = document.getElementById('assignmentInput').value;
    var dueDate = document.getElementById('duedate').value;
    var time = document.getElementById('subject').value;

    if (priority && assignment && dueDate && time) {
        var table = document.querySelector('.schedule');
        var newRow = table.insertRow(-1); // -1 inserts a new row at the last position

        var priorityCell = newRow.insertCell(0);
        var assignmentCell = newRow.insertCell(1);
        var dueDateCell = newRow.insertCell(2);
        var timeCell = newRow.insertCell(3);

        priorityCell.textContent = priority;
        assignmentCell.textContent = assignment;
        dueDateCell.textContent = dueDate;
        timeCell.textContent = time;
    } else {
        alert("Please fill in all the fields.");
    }
}