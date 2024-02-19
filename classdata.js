class Clas{
    classGrades = {
    }
    currentAssignments = {

    }
    
    accountData = { "David": { "password": "varmanismyfriend", "classes": [], "grades": [], "assignments": [], "assignment_weights": [] } }

    //the input gonna be like ["CSA","Pre Calc","Linglish 10 honors"]
    constructor(classes,grades) {
        for (var i = 0; i < len(classes);i++) {
            course = classes[i]
            this.classGrades[course] = grades
            this.currentAssignments[course] = []  //is this for the assignments for each class
        }
            
    }
        

    //adds a previous assignment's grade to it (we dont care about the assignments name after its graded)
    accessor addGradedProject(course, grade){
        return this.classGrades[course] = (this.classGrades[course] + grade) / 2
    }


    accessor addAssignment(course, name, dueDate){
        this.currentAssignments[course].append({"name": name, "did": dueDate})
    } 

    accessor getAllSortedScores() {
        var scores = []
        var names = []
        for (const key in this.currentAssignments){
            values = this.currentAssignments[key]
            for (const assignment in values){
                scores.append([key + assignment["name"], self.classGrades[key] - assignment["did"]])
                names.append(assignment["did"])
            }
        }
            
        a = []
        b = []
        for (const z in scores) {
            a.append(z[1])
            b.append(z[0])
        }
            
        a = this.insertionSort(a,b,names)
        return a
    }
       
    accessor isAsending(l, index) {
        if(index-1 > 0 && index+1<len(list)) {
            return l[index-1] < l[index] < l[index+1]
        }
        else if(index == 0){
            return l[0] < l[1]
        }
        else{
            return l[index-1] < l[index]
        }
    }
       
    accessor insertionSort(arr,anotherArr,thirdArr){
        for (var i = 1; i<len(arr);i++) {
            key = arr[i]
            key2 = anotherArr[i]
            thirdKey = thirdArr[i]
            j = i-1
            while (j >= 0 && key < arr[j]) {
                arr[j + 1] = arr[j]
                anotherArr[j+1] = anotherArr[j]
                thirdArr[j+1] = thirdArr[j]
                j -= 1
            }
                
            arr[j + 1] = key
            anotherArr[j + 1] = key2
            thirdArr[j+1] = key3
            return [thirdArr,anotherArr]
        }
    }
        
           

}

function thing() {
    console.log("monk");
}

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
    for (var i = 0; i < 10; i ++) {
        console.log(assignmentList[i]);
    }

    var table = document.getElementById("schedule");
    var tbody = document.getElementById("scheduleBody");
  
    if (tbody.firstChild != null) {
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
          }
    }


    for (var i = 0; i < assignmentList.length; i++) {
        var priority = document.getElementById('priority').value; //replace these with the input from ishans code
        var assignment = assignmentList[i];
        var dueDate = duedateList[i];
        var time = subjectList[i];

        if (priority && assignment && dueDate && time) {
            var table = document.getElementById("scheduleBody");
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
}