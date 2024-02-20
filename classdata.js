class Clas{
    classGrades = {
    };
    currentAssignments = {

    };
    

    //the input gonna be like ["CSA","Pre Calc","Linglish 10 honors"]
    constructor(classes,grades) {
        for (var i = 0; i < classes.length;i++) {
            var course = classes[i];
            
            this.classGrades[course] = grades;
            this.currentAssignments[course] = [];  //is this for the assignments for each class
            
        }

            
    }
        

    //adds a previous assignment's grade to it (we dont care about the assignments name after its graded)
    addGradedProject(course, grade){
        this.classGrades[course] = (this.classGrades[course] + grade) / 2;
    }


    addAssignment(course, name, dueDate){

        this.currentAssignments[course].push({"name": name, "did": dueDate});
    } 

    getAllSortedScores() {        
        var scores = [];
        var names = [];
        for (const [key, values] of Object.entries(this.currentAssignments)){
            for (var i = 0; i< values.length;i++){
                var assignment = values[i]
                scores.push([key +" "+ assignment["name"], Number(this.classGrades[key]) - assignment["did"]]);
                names.push(assignment["name"]);
            }
        }
        console.log(scores)
        console.log(names)
        var a = [];
        var b = [];
        for (var i = 0; i<scores.length;i++) {
            var z = scores[i];
            a.push(z[1]);
            b.push(z[0]);
        }
        a = this.insertionSort(a,b,names);
        return a
    }
       
    isAsending(l, index) {
        if(index-1 > 0 && index+1<list.length) {
            return l[index-1] < l[index] < l[index+1];
        }
        else if(index == 0){
            return l[0] < l[1];
        }
        else{
            return l[index-1] < l[index];
        }
    }
       
    insertionSort(arr,anotherArr,thirdArr){
        for (var i = 1; i<arr.length;i++) {
            var key = arr[i];
            var key2 = anotherArr[i];
            var thirdKey = thirdArr[i];
            j = i-1;
            while (j >= 0 && key < arr[j]) {
                arr[j + 1] = arr[j];
                anotherArr[j+1] = anotherArr[j];
                thirdArr[j+1] = thirdArr[j];
                j -= 1;
            }
                
            arr[j + 1] = key;
            anotherArr[j + 1] = key2;
            thirdArr[j+1] = thirdKey;
            return [thirdArr,anotherArr];
        }
    }
        
           

}
let classes = [];
let grade = [];
function thing() {
    localStorage.setItem("classes",classes);
    localStorage.setItem("grade",grade);
}

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
let priorityList = [];
let cles = new Clas([],[])
function addAssignment() {
    var assignment = document.getElementById('assignmentInput').value;
    var duedate = document.getElementById('duedate').value;
    var subject = document.getElementById('subject').value;
    var priority = document.getElementById('priority').value;
    cles = new Clas(localStorage.getItem("classes").split(","),localStorage.getItem("grade").split(",")[0])
    if (assignment.trim() === '' || duedate.trim() === '' || subject.trim() === '' || priority.trim() === '') {
        alert("Please fill out all fields");
        return false;
    }
    cles.addAssignment(subject,assignment,duedate,priority)
    
    assignmentList.push(assignment);
    duedateList.push(duedate);
    subjectList.push(subject);
    priorityList.push(priority);
    document.getElementById('assignmentInput').value = "";
    document.getElementById('duedate').value = "";
    document.getElementById('subject').value = "";
    document.getElementById('priority').value = "";

}


function addToTable() {

    x = (cles.getAllSortedScores())    
    console.log(x)
    var table = document.getElementById("schedule");
    var tbody = document.getElementById("scheduleBody");
  
    if (tbody.firstChild != null) {
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
          }
    }


    for (var i = 0; i < assignmentList.length; i++) {
        var assignment = assignmentList[i];
        var dueDate = duedateList[i];
        var time = subjectList[i];
        var priority = priorityList[i];

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